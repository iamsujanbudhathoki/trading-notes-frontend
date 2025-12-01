import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Read the terms and conditions for using TRADENOTES educational platform.",
};

export default function TermsPage() {
    return (
        <div className="w-full min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                <h1 className="font-sans font-bold text-4xl md:text-5xl text-slate-900 mb-6">
                    Terms of Service
                </h1>

                <p className="text-sm text-slate-500 mb-12">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <div className="space-y-8">
                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Agreement to Terms</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            By accessing or using TRADENOTES, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Educational Purpose</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            All content on TRADENOTES is provided for educational and informational purposes only. The content is not intended to be a substitute for professional financial advice. Always seek the advice of a qualified financial advisor with any questions you may have regarding trading or investments.
                        </p>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Intellectual Property</h2>
                        <p className="text-sm text-slate-700 leading-relaxed mb-3">
                            The content, organization, graphics, design, and other matters related to TRADENOTES are protected under applicable copyrights and other proprietary laws. You may not:
                        </p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span>Modify, copy, distribute, transmit, display, reproduce, or create derivative works from the content</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span>Use the content for commercial purposes without written permission</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span>Remove any copyright or proprietary notices from the content</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">User Conduct</h2>
                        <p className="text-sm text-slate-700 leading-relaxed mb-3">
                            You agree not to:
                        </p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span>Use the website in any way that violates any applicable law or regulation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span>Engage in any conduct that restricts or inhibits anyone's use of the website</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span>Attempt to gain unauthorized access to any portion of the website</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span>Use any automated system to access the website in a manner that sends more requests than a human can reasonably produce</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Disclaimer of Warranties</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            The website is provided on an "as is" and "as available" basis. TRADENOTES makes no warranties, expressed or implied, and hereby disclaims all warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                        </p>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Limitation of Liability</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            In no event shall TRADENOTES or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TRADENOTES, even if TRADENOTES or an authorized representative has been notified of the possibility of such damage.
                        </p>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Links to Third-Party Sites</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            TRADENOTES may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                        </p>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Changes to Terms</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                        </p>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Contact Us</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            If you have any questions about these Terms of Service, please contact us through our website.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
