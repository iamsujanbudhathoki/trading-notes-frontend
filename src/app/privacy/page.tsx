import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Learn how TRADENOTES collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
    return (
        <div className="w-full min-h-screen bg-cream">
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                <h1 className="font-serif font-bold text-4xl md:text-5xl text-slate-900 mb-6">
                    Privacy Policy
                </h1>

                <p className="text-sm text-slate-500 mb-12 font-medium uppercase tracking-wider">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <div className="space-y-8">
                    <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                        <h2 className="font-serif font-bold text-xl text-slate-900 mb-4">Introduction</h2>
                        <p className="text-slate-600 leading-relaxed">
                            TRADENOTES ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                        </p>
                    </section>

                    <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                        <h2 className="font-serif font-bold text-xl text-slate-900 mb-4">Information We Collect</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We may collect information about you in a variety of ways, including:
                        </p>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 font-bold mt-1">•</span>
                                <span><strong className="text-slate-900 font-medium">Personal Data:</strong> Information you voluntarily provide such as name and email address when subscribing to our newsletter or contacting us.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 font-bold mt-1">•</span>
                                <span><strong className="text-slate-900 font-medium">Usage Data:</strong> Information automatically collected when you visit our site, including IP address, browser type, pages visited, and time spent on pages.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 font-bold mt-1">•</span>
                                <span><strong className="text-slate-900 font-medium">Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information.</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                        <h2 className="font-serif font-bold text-xl text-slate-900 mb-4">How We Use Your Information</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 font-bold mt-1">•</span>
                                <span>Provide, operate, and maintain our website</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 font-bold mt-1">•</span>
                                <span>Improve, personalize, and expand our website</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 font-bold mt-1">•</span>
                                <span>Understand and analyze how you use our website</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 font-bold mt-1">•</span>
                                <span>Send you newsletters and marketing communications (with your consent)</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                        <h2 className="font-serif font-bold text-xl text-slate-900 mb-4">Third-Party Services</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We may use third-party service providers to monitor and analyze the use of our website. These third parties have access to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                        </p>
                    </section>

                    <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                        <h2 className="font-serif font-bold text-xl text-slate-900 mb-4">Your Rights</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            You have the right to:
                        </p>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 font-bold mt-1">•</span>
                                <span>Access, update, or delete your personal information</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 font-bold mt-1">•</span>
                                <span>Opt-out of marketing communications</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 font-bold mt-1">•</span>
                                <span>Request a copy of your data</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                        <h2 className="font-serif font-bold text-xl text-slate-900 mb-4">Data Security</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                        <h2 className="font-serif font-bold text-xl text-slate-900 mb-4">Changes to This Policy</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                    </section>

                    <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                        <h2 className="font-serif font-bold text-xl text-slate-900 mb-4">Contact Us</h2>
                        <p className="text-slate-600 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us through our website.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
