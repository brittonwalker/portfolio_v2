export function Project({
  title,
  description = 'This is a brief description of the project, highlighting its main features and technologies used.',
  imageUrl = '/video/nm-capture-optimized.mp4',
  index,
}: {
  title?: string;
  description?: string;
  imageUrl?: string;
  index: number;
}) {
  return (
    <div className="project mt-20 w-full shrink-0">
      <div className="grid grid-cols-12 gap-4 pb-20">
        <div
          className="project-title relative z-10"
          style={{ gridArea: '1/2/2/6' }}
        >
          <div className="text-[3vw] leading-[3.5vw] flex flex-col justify-between h-full">
            <div className="top">
              <p className="number">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="text-[5vw] leading-[5.5vw]">{title}</h3>
            </div>
            <p className="text-[1.5vw] leading-[2vw] text-balance">
              {description}
            </p>
          </div>
        </div>
        <div className="project-image" style={{ gridArea: '1 / 6 / 2 / 12' }}>
          <div className="aspect-[1440/900] bg-black p-4 rounded-sm border border-current">
            <video
              src={imageUrl}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          className="project-description relative z-10"
          style={{ gridArea: '1/9/2/12' }}
        ></div>
      </div>
    </div>
  );
}
