import logo from '../assets/images/logo.png';

function Splash() {
    return (
        <section>
            <div className="container mx-auto min-h-screen">
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="w-full md:w-4/12 text-center">
                        <img 
                            src={logo} 
                            alt="LuxSpace | Fulfill your house with beautiful furniture" 
                            className="mx-auto mb-8"
                        />
                        <p className="mb-8 px-4">
                            Kami menyediakan furniture berkelas yang membuat ruangan terasa homey
                        </p>
                        {/* Spinner */}
                        <div className="flex items-center justify-center">
                            <div className="w-8 h-8 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Splash;
