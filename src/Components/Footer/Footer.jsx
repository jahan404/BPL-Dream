import React from 'react';

const Footer = () => {
    return (
    <div >
    <div className='relative mt-80'>
    
    
    <div className='w-11/12 mx-auto border-2 p-5 border-white rounded-4xl  absolute -top-50 left-16'>

    <div className="bg-[url('/images/bg-shadow.png')] bg-no-repeat bg-cover bg-white text-center py-28 space-y-4 border-gray-100 border-2  rounded-4xl">
    <h1 className='text-4xl font-bold'>Subscribe to our Newsletter</h1>
    <p className='text-sm text-gray-600'>Get the latest updates and news right in your inbox!</p>

    <div className='flex gap-4 justify-center items-center'>
    <input type="text" placeholder="Enter your email" class="input" />

    <button className='btn btn-lg bg-gradient-to-r from-fuchsia-400 from-5% to-yellow-500 to-80%'>Subscribe</button>
    </div>

    </div>

    </div>
    

    
    <footer className='bg-black pt-40 '>

    <div>
        <img src="/public/images/logo-footer.png" alt="" className='mx-auto pt-40 pb-20'/>
    </div>

    <div class="w-11/12 mx-auto flex justify-between items-start  gap-20 text-neutral-content pb-24 ">

  <div className='w-1/5'>
    <h6 class="footer-title">About Us</h6>
    <p className='text-sm text-gray-300'>We are a passionate team dedicated to providing the best services to our customers.</p>
  </div>

  <div className='flex flex-col'>
    <h6 class="footer-title">Quick Links</h6>
    
    <div className='text-sm text-gray-300 flex flex-col'>
    <li class="link link-hover">Home</li>
    <li class="link link-hover">Services</li>
    <li class="link link-hover">About</li>
    <li class="link link-hover">Contact</li>
    </div>
  </div>

  <div className=''>
    <h6 class="footer-title">Subscribe</h6>
    <div className='flex justify-center items-center'>
    <input type="text" placeholder="Enter your email" class="input text-black" />

    <button className='btn bg-gradient-to-r from-fuchsia-400 from-5% to-yellow-500 to-80% border-none'>Subscribe</button>
    </div>
  </div>
  
</div>
</footer>
</div>


        <div className='border-t-1 border-gray-500 py-6 bg-black'>
            <p className='text-center text-gray-300 text-sm'>@2024 Your Company All Rights Reserved.</p>
        </div>


        </div>
    );
};

export default Footer;