"use client";
import { useState } from "react";
import Footer from "./Footer";
import { Toaster, toast } from 'sonner'


export const Inquiry = () => {
    const [formData, setFormData] = useState({
        contactPerson: "",
        email: "",
        phone: "",
        city: "",
        country: "",
        inquiryFor: "",
        comments: "",
    });

    const [loading, setLoading] = useState(false); // Loading state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Update your handleSubmit function
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true); // Set loading state to true

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            toast.success("Inquiry sent successfully"); // Success toast
        } else {
            toast.error("Failed to send inquiry"); // Error toast
        }

        setLoading(false); // Set loading state back to false
        // Reset form fields after submission
        setFormData({
            contactPerson: "",
            email: "",
            phone: "",
            city: "",
            country: "",
            inquiryFor: "",
            comments: "",
        });
    }

    return (
        <>
            <div className="items-center justify-center w-full mt-0 py-4 bg-white">
                <h1 className="text-orange-500 text-4xl md:text-6xl lg:text-6xl font-bold mt-2 mb-6 lg:mt-4 py-2 text-center">Inquiry</h1>
            </div>
            <div className="relative mb-16">
                {/* Your header banner and title */}
                <form className="max-w-3xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg shadow-orange-400" onSubmit={handleSubmit}>
                    {/* Contact Person */}
                    <div className="mb-4">
                        <label className="block mb-2">Contact Person*</label>
                        <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" required />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="block mb-2">E-mail*</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" required />
                    </div>
                    {/* Phone */}
                    <div className="mb-4">
                        <label className="block mb-2">Phone*</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    {/* Country */}
                    <div className="mb-4">
                        <label className="block mb-2">Country</label>
                        <input type="text" name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    {/* City */}
                    <div className="mb-4">
                        <label className="block mb-2">City</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    {/* Inquiry For */}
                    <div className="mb-4">
                        <label className="block mb-2">Inquiry For*</label>
                        <select name="inquiryFor" value={formData.inquiryFor} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" required>
                            <option value="">Select</option>
                            <option value="Industrial cable glands - A1/A2, BW and CW gland kits">Industrial cable glands - A1/A2, BW and CW gland kits</option>
                            <option value="Cable glands for hazardous areas">Cable glands for hazardous areas</option>
                            <option value="Wiping glands and top hat gland kits for power cable terminationss">Wiping glands and top hat gland kits for power cable terminations</option>
                            <option value="Copper and aluminium compression terminals and splices">Copper and aluminium compression terminals and splices</option>
                            <option value="Insulated copper pin, ring and spade terminals">Insulated copper pin, ring and spade terminals</option>
                            <option value="Heat shrink joint and termination kits for LV and MV power cables">Heat shrink joint and termination kits for LV and MV power cables</option>
                            <option value="Heat shrink tubings, breakouts, right angle boots, straight boots and end caps">Heat shrink tubings, breakouts, right angle boots, straight boots and end caps</option>
                            <option value="MV screened pre moulded separable elbows and splices">MV screened pre moulded separable elbows and splices</option>
                            <option value="Cable cleats, verhead line compression and bolted connectors and accessories">Cable cleats, verhead line compression and bolted connectors and accessories</option>
                            <option value="Polymeric insulators">Polymeric insulators</option>
                            <option value="Others">Others</option>
                            {/* Add other options similarly */}
                        </select>
                    </div>
                    {/* Comments */}
                    <div className="mb-4">
                        <label className="block mb-2">Comments</label>
                        <textarea name="comments" value={formData.comments} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"></textarea>
                    </div>
                    <div>
                        <div>
                            <button type="submit" className="bg-blue-950 hover:shadow-orange-500 hover:shadow-lg text-white px-6 py-1 rounded-xl" disabled={loading}>
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Toaster richColors/>
            <Footer />
        </>
    );
};

