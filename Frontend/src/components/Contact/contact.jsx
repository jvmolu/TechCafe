import React from 'react';
import ContactPhoto from './contactUsPhoto.jpg';
import InputBox from "./inputBox";
import MessageBox from "./MessageBox";

function contact(){
    return (
        <div className="bg-red-600 text-gray-100 px-8 py-12">
            <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-yellow-500 text-gray-900 rounded-lg">
                <div className="flex flex-col justify-between">
                <div>
                    <h2 className="text-4xl lg:text-7xl font-bold">Contact us!</h2>
                </div>
                <div className="mt-8 text-center">
                    <img className = "xs:w-full lg:w-4/5 flex-shrink-0" src = {ContactPhoto} alt="Contact"/>
                </div>
                </div>
                <div>
                    <InputBox title = "Full Name"/>
                    <InputBox title = "Email"/>
                    <InputBox title = "Mobile Number"/>
                    <MessageBox title = "Message" />
                <div className="mt-8">
                    <button class="bg-transparent uppercase text-sm font-semibold tracking-wide hover:bg-red-500 text-red-700 hover:text-white p-3 rounded-lg w-full py-2 px-4 border border-red-500 hover:border-transparent">
                        Submit
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default contact;