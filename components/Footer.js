import React from 'react'

const Footer = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 pl-16 sm:pl-32 py-14 bg-gray-100'>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold uppercase">Support</h5>
                <p>Help Center</p>
                <p>Safety information</p>
                <p>Cancellation options</p>
                <p>Our COVID-19 Response</p>
                <p>Supporting people with disabilities</p>
                <p>Report a neighborhood concern</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold uppercase">Community</h5>
                <p>Hello there</p>
                <p>This is not a real site</p>
                <p>Just a clone</p>
                <p>No more</p>
                <p>Thank you</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold uppercase">Hosting</h5>
                <p>Try hosting</p>
                <p>AirCover: protection for Hosts</p>
                <p>Explore hosting resources</p>
                <p>Visit our community forum</p>
                <p>How to host responsibly</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold uppercase">About</h5>
                <p>Newsroom</p>
                <p>Learn about new features</p>
                <p>Letter from our founders</p>
                <p>Careers</p>
                <p>Investors</p>
                <p>Airbnb Luxe</p>
            </div>
        </div>
    )
}

export default Footer
