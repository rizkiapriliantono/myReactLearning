function PopupInformation({handleVisiblePopup}) {
    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center w-100" onClick={handleVisiblePopup}>
        <div className="fixed inset-0 bg-black opacity-35"></div>
        <div className="bg-white p-6 md:p-8 z-10 rounded-lg mx-4">
        <div className="w-screen pb-56 md:w-96 md:pb-56 relative z-50">
            <div className="absolute w-full h-full">
              <iframe
                title="videoInformation"
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/3h0_v1cdUIA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default PopupInformation;