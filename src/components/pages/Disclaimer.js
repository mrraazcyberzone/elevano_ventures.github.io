import React from 'react'

function disclaimer() {
  return (
    <>
    <div className="container mx-auto mt-6 px-4">
      <h2 className="text-left text-red-600 text-xl md:text-4xl font-bold">LEGAL DISCLAIMER</h2>
      <div className="mt-4 text-left">
        <p className="text-sm md:text-base">
          It has been brought to our attention that certain individuals are posing as EVP’s HR Team to scam people in lieu of offering a job OR Fraudsters are claiming to be employees offering various services in lieu for quick money!
        </p>
        <p className="mt-4 text-sm md:text-base">
          Please note that we are not associated with any such individual in any way. All official HR communications are made from{' '}
          <a href="mailto:hr@elevanoventure.com" className="text-red-600">hr@elevanoventure.com</a>{' '}
          and{' '}
          <a href="tel:+919821116003" className="text-red-500 ">+91 98211 16003</a> only.
        </p>
        <p className="mt-4 text-sm md:text-base">
          We strongly suggest checking our website, calling, or mailing the above details to know of our service offerings before committing any money.
        </p>
        <p className="mt-4 text-sm md:text-base">
          If someone is trying to contact you using our name, please confirm their identity before entertaining them. If you have already been scammed, please reach out to the Indian Govt’s Cyber Crime division for help. Report cyber frauds immediately to National Cyber Crime at{' '}
          <a href="https://cybercrime.gov.in/" className="text-red-600 no-underline">cybercrime.gov.in</a>{' '}
          or call their helpline on{' '}
          <a href="tel:1930" className="text-red-600 no-underline" target="_blank">1930</a>.
        </p>
      </div>
    </div>
    </>
  )
}

export default disclaimer