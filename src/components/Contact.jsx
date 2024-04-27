export const ContactUs = () => {
    return (
        <div className="bg-white flex justify-center items-center">
            <div className="pt-0 pb-24 text-center">
                <h2 className="text-2xl font-medium mb-4">Contact Us</h2>
                <p className="text-lg mb-6">
                    Have any questions or feedback? Feel free to reach out to us.
                </p>
                <div className="flex flex-col mb-6">
                    <p className="text-lg font-medium mb-2">Phone:</p>
                    <p className="text-lg">123-456-7890</p>
                </div>
                <div className="flex flex-col mb-6">
                    <p className="text-lg font-medium mb-2">Email:</p>
                    <p className="text-lg">info@example.com</p>
                </div>
                <div className="flex flex-col mb-6">
                    <p className="text-lg font-medium mb-2">Address:</p>
                    <p className="text-lg">123 Street Name, City, Country</p>
                </div>
                <p className="text-lg">
                    We are available during our business hours:
                </p>
                <p className="text-lg">
                    Monday - Friday: 9:00 AM - 5:00 PM
                </p>
            </div>
        </div>
    )
}
