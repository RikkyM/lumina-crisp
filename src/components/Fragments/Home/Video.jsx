const Video = () => {
    return (
      <div className="flex justify-center h-max py-14 bg-white shadow-sm">
        <div className="h-max p-2 mx-auto">
          <iframe
            className="w-[330px] h-[186px] mx-auto sm:w-[460px] sm:h-[260px] md:w-[720px] md:h-[405px]"
            src="https://www.youtube.com/embed/9lnDV7d5-ic?autoplay=0&mute=1&loop=1&playlist=9lnDV7d5-ic&controls=1&showinfo=0&modestbranding=1&rel=0"
            title="Lumina Crips | Official Trailer"
            allow="autoplay; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className="text-center font-magic capitalize mt-10 text-lg px-4">
            "crafting delightful culinary experiences that satisfy and inspire"
          </div>
        </div>
      </div>
    );
}

export default Video;