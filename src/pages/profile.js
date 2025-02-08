// Komponen Profile
import React from 'react';
import { Link } from 'react-router-dom';

// Fungsi untuk mengonversi Base64 URL menjadi Uint8Array
function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

// Fungsi untuk berlangganan notifikasi push
async function subscribeToNotifications() {
    const publicKey = "BMEvoprcSfFYIYQO9JgC6mUVN0iGUyVp0Gcj2YMGBGGInhS7gA8HZHr8MrO5F_LxouyoU4UAhDywO58bjeH-CDA";

    try {
        const subscription = await global.registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlB64ToUint8Array(publicKey),
        });
        console.log('Subscribed:', subscription);
    } catch (error) {
        console.error('Error subscribing:', error);
    }
}

function Profile() {
    return (
        <>
            <header className="w-full z-50 px-4">
                <div className="container mx-auto py-5">
                    <div className="flex flex-stretch items-center">
                        <div className="w-56 items-center flex">
                            <Link to="/">
                                <img
                                    src="images/content/logo.png"
                                    alt="Luxspace | Fulfill your house with beautiful furniture"
                                />
                            </Link>
                        </div>
                        <div className="w-full"></div>
                        <div className="w-auto">
                            <ul
                                className="fixed bg-white inset-0 z-0 flex flex-col invisible items-center justify-center opacity-0 md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center"
                                id="menu"
                            >
                                <li className="mx-3 py-6 md:py-0">
                                    <a href="/" className="text-black md:text-black hover:underline">
                                        Showcase
                                    </a>
                                </li>
                                <li className="mx-3 py-6 md:py-0">
                                    <a href="/" className="text-black md:text-black hover:underline">
                                        Catalog
                                    </a>
                                </li>
                                <li className="mx-3 py-6 md:py-0">
                                    <a href="/" className="text-black md:text-black hover:underline">
                                        Delivery
                                    </a>
                                </li>
                                <li className="mx-3 py-6 md:py-0">
                                    <a href="/" className="text-black md:text-black hover:underline">
                                        Rewards
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-auto">
                            <ul className="items-center flex">
                                <li className="ml-6 block md:hidden">
                                    <button
                                        id="menu-toggler"
                                        className="relative flex z-50 items-center justify-center w-8 h-8 text-black md:text-black focus:outline-none"
                                    >
                                        <svg className="fill-current" width="18" height="17" viewBox="0 0 18 17">
                                            <path d="M15.9773 0.461304H1.04219C0.466585 0.461304 0 0.790267 0 1.19609C0 1.60192 0.466668 1.93088 1.04219 1.93088H15.9773C16.5529 1.93088 17.0195 1.60192 17.0195 1.19609C17.0195 0.790208 16.5529 0.461304 15.9773 0.461304Z" />
                                            <path d="M15.9773 7.68802H1.04219C0.466585 7.68802 0 8.01698 0 8.42281C0 8.82864 0.466668 9.1576 1.04219 9.1576H15.9773C16.5529 9.1576 17.0195 8.82864 17.0195 8.42281C17.0195 8.01692 16.5529 7.68802 15.9773 7.68802Z" />
                                            <path d="M15.9773 14.9147H1.04219C0.466585 14.9147 0 15.2437 0 15.6495C0 16.0553 0.466668 16.3843 1.04219 16.3843H15.9773C16.5529 16.3843 17.0195 16.0553 17.0195 15.6495C17.0195 15.2436 16.5529 14.9147 15.9773 14.9147Z" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="ml-6">
                                    <Link
                                        id="header-cart"
                                        to="cart.html"
                                        className="flex items-center justify-center w-8 h-8 text-black cart cart-filled"
                                    >
                                        {/* SVG Icon */}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <section className="bg-gray-100 py-8 px-4">
                <div className="container mx-auto">
                    <ul className="breadcrumb">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/profile" aria-label="current-page">
                                My Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="">
                <div className="container mx-auto min-h-screen">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full md:w-4/12 text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 mt-20">
                                <img
                                    src="./images/content/my-profile.png"
                                    alt="my-profile"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h2 className="text-xl font-semibold mb-1">Masayoshi Angga</h2>
                            <p className="text-lg mb-12">Jr. Website Developer</p>
                        </div>
                    </div>
                    <ul className="max-w-full md:max-w-lg mx-auto">
                        <li className="pb-3 mb-2 flex items-center justify-between w-full border-b border-gray-100">
                            <span>Subscribe to Notification</span>
                            <button className="hover:underline appearance-none" onClick={subscribeToNotifications}>
                                Subscribe
                            </button>
                        </li>
                        <li className="pb-3 mb-2 flex items-center justify-between w-full border-b border-gray-100">
                            <span>Test Notification</span>
                            <button className="hover:underline appearance-none">Push Now</button>
                        </li>
                    </ul>
                    <div className="text-center mt-12">
                        <Link
                            to="/"
                            className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
                        >
                            Back to Shop
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;
