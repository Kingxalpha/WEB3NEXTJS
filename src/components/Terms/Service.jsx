import React from 'react'

const Service = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='w-[80%] flex-col gap-[40px] flex sm:w-full sm:p-3'>
        <div>
          <h1 className='text-5xl text-white font-bold sm:text-3xl'>Terms of services</h1>
          <p className='text-[gray] font-normal'>Last Updated: 23May, 2023</p>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-white font-bold text-xl sm:text-lg'>1. Acceptance of Terms</h1>
            <p className='text-[gray] font-normal'>By accessing or using the [Your Website/Platform Name] ("Service"), you agree to comply with and be bound by these Terms of Service ("TOS"). If you do not agree to these terms, please do not use the Service.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-white font-bold text-xl sm:text-lg'>2. Changes to the TOS</h1>
            <p className='text-[gray] font-normal'>We reserve the right to modify these TOS at any time. Any changes will be effective immediately upon posting on the Service. You are responsible for regularly reviewing the TOS to stay informed of updates. Your continued use of the Service after changes to the TOS constitute your acceptance of the revised terms.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-white font-bold text-xl sm:text-lg'>3. User Accounts</h1>
            <ul>
              <li className='text-[gray] font-normal'>a. You may be required to create an account to access certain features of the Service. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
              <li className='text-[gray] font-normal'>b. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</li>
              <li className='text-[gray] font-normal'>c. We reserve the right to suspend or terminate your account at our discretion if we believe you have violated these TOS.</li>
            </ul>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-white font-bold text-xl sm:text-lg'>4. User Content</h1>
            <ul>
              <li className='text-[gray] font-normal'>a. You are solely responsible for any content you submit or post on the Service, including text, images, or any other material ("User Content").</li>
              <li className='text-[gray] font-normal'>b. You grant [Your Company Name] a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display your User Content.</li>
              <li className='text-[gray] font-normal'>c. You represent and warrant that your User Content does not infringe upon the rights of any third party.</li>
            </ul>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-white font-bold text-xl sm:text-lg'>5. Prohibited Conduct</h1>
            <p className='text-[gray] font-normal'>You agree not to:</p>
            <ul>
              <li className='text-[gray] font-normal'>a. Use the Service for any unlawful purpose or to engage in any illegal activity.</li>
              <li className='text-[gray] font-normal'>b. Use the Service to harass, defame, abuse, threaten, or otherwise violate the rights of others.</li>
              <li className='text-[gray] font-normal'>c. Attempt to gain unauthorized access to the Service, user accounts, or computer systems.</li>
              <li className='text-[gray] font-normal'>d. Transmit or upload any viruses, worms, or malicious code.</li>
            </ul>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-white font-bold text-xl sm:text-lg'>6. Privacy Policy</h1>
            <p className='text-[gray] font-normal'>Your use of the Service is also governed by our Privacy Policy, which can be found at [link to your Privacy Policy page].</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-white font-bold text-xl sm:text-lg'>7. Disclaimer of Warranties</h1>
            <p className='text-[gray] font-normal'>The Service is provided "as is" and without warranties of any kind, either express or implied. We do not warrant that the Service will be error-free or uninterrupted, or that defects will be corrected.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-white font-bold text-xl sm:text-lg'>8. Limitation of Liability</h1>
            <p className='text-[gray] font-normal'>To the fullest extent permitted by applicable law, [Your Company Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-white font-bold text-xl sm:text-lg'>9. Governing Law and Jurisdiction</h1>
            <p className='text-[gray] font-normal'>These TOS are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. Any disputes arising from or relating to these TOS shall be subject to the exclusive jurisdiction of the state and federal courts located in [Your Jurisdiction].</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-white font-bold text-xl sm:text-lg'>10. Contact Information</h1>
            <p className='text-[gray] font-normal'>If you have any questions about these Terms of Service, please contact us at Customer support.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service