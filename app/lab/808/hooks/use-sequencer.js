import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import * as Tone from 'tone';

const useSequencer = () => {
  const isPlayingRef = useRef(false);
  const [bpm, setBpm] = useState(120);
  const [samplesLoaded, setSamplesLoaded] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('kick');
  const [, forceUpdate] = useState({});

  const samplers = useMemo(() => {
    const samplerMap = {
      kick: new Tone.Sampler({
        urls: {
          C1: '/samples/kick.wav',
        },
      }).toDestination(),
      snare: new Tone.Sampler({
        urls: {
          C1: '/samples/snare.wav',
        },
      }).toDestination(),
      hihat_closed: new Tone.Sampler({
        urls: {
          C1: '/samples/hihat_closed.wav',
        },
      }).toDestination(),
      hihat_open: new Tone.Sampler({
        urls: {
          C1: '/samples/hihat_open.wav',
        },
      }).toDestination(),
    };
    return samplerMap;
  }, []);

  useEffect(() => {
    // Check if all samplers are loaded
    const checkSamplersLoaded = () => {
      const allLoaded = Object.values(samplers).every(
        sampler => sampler.loaded
      );
      if (allLoaded) {
        setSamplesLoaded(true);
      }
    };

    // Poll for loaded state (Tone.js samplers update their loaded property)
    const interval = setInterval(checkSamplersLoaded, 100);

    return () => clearInterval(interval);
  }, [samplers]);

  // Use ref for tracks data - this doesn't need to trigger re-renders
  // The sequences need to access current values, not stale closures
  const tracksRef = useRef({
    kick: {
      name: 'kick',
      steps: Array.from({ length: 16 }, () => false),
      length: 16,
      vol: 0,
    },
    snare: {
      name: 'snare',
      steps: Array.from({ length: 16 }, () => false),
      length: 16,
      vol: 0,
    },
    hihat_closed: {
      name: 'hihat_closed',
      steps: Array.from({ length: 16 }, () => false),
      length: 16,
      vol: 0,
    },
    hihat_open: {
      name: 'hihat_open',
      steps: Array.from({ length: 16 }, () => false),
      length: 4,
      vol: 0,
    },
  });

  const sequencesRef = useRef(null);

  // Initialize sequences on mount
  useEffect(() => {
    if (!samplesLoaded) return;

    // Create sequences that reference the tracksRef
    sequencesRef.current = Object.keys(tracksRef.current).map((trackName) => {
      return new Tone.Sequence(
        (time, step) => {
          const track = tracksRef.current[trackName];
          if (track.steps[step]) {
            const sampler = samplers[trackName];
            sampler.volume.value = track.vol;
            sampler.triggerAttackRelease('C1', `${track.length}n`, time);
          }
        },
        Array.from({ length: 16 }, (_, index) => index),
        '16n'
      );
    });

    // Cleanup on unmount
    return () => {
      if (sequencesRef.current) {
        sequencesRef.current.forEach((sequence) => sequence.dispose());
      }
    };
  }, [samplesLoaded, samplers]);

  const togglePlay = useCallback(() => {
    if (!samplesLoaded || !sequencesRef.current) return;

    if (isPlayingRef.current) {
      Tone.getTransport().stop();
      sequencesRef.current.forEach((sequence) => sequence.stop());
      isPlayingRef.current = false;
    } else {
      Tone.getTransport().start();
      sequencesRef.current.forEach((sequence) => sequence.start(0));
      isPlayingRef.current = true;
    }
  }, [samplesLoaded]);

  const updateVolume = useCallback(
    (trackName, newVolume) => {
      tracksRef.current[trackName].vol = newVolume;
      // No need to trigger re-render - sequences read from ref
    },
    []
  );

  const resetTrack = useCallback((trackName) => {
    tracksRef.current[trackName].steps = Array.from({ length: 16 }, () => false);
    // Force re-render to update UI
    forceUpdate({});
  }, []);

  const toggleStep = useCallback(
    (stepIndex) => {
      tracksRef.current[currentTrack].steps[stepIndex] =
        !tracksRef.current[currentTrack].steps[stepIndex];
      // Force re-render to update UI (step lights)
      forceUpdate({});
    },
    [currentTrack]
  );

  useEffect(() => {
    const handleKeyPress = (e) => {
      const keyNumber = parseInt(e.key, 10);
      if (e.key === ' ') {
        togglePlay();
      }
      if (!isNaN(keyNumber) && keyNumber >= 1 && keyNumber <= 16) {
        toggleStep(keyNumber - 1);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [togglePlay, toggleStep]);

  useEffect(() => {
    Tone.getTransport().bpm.value = bpm;
  }, [bpm]);

  return {
    tracks: tracksRef.current,
    isPlaying: isPlayingRef.current,
    togglePlay,
    toggleStep,
    currentTrack,
    setCurrentTrack,
    updateVolume,
    setBpm,
    bpm,
    resetTrack,
  };
};

export default useSequencer;
