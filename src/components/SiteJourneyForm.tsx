import React, { useState, FormEvent, ReactNode } from 'react';

interface SiteJourneyFormProps {
    className?: string;
    children: ReactNode;
}

export default function SiteJourneyForm({
    className,
    children,
}: SiteJourneyFormProps) {
    console.log('WEB3FORMS VERSION LOADED');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setStatus('submitting');
        setErrorMsg('');

        const form = e.currentTarget;
        const formData = new FormData(form);

        formData.append(
            'subject',
            'New Gym Animals Contact Form Submission'
        );

        try {
            const response = await fetch(
                'https://api.web3forms.com/submit',
                {
                    method: 'POST',
                    body: formData,
                }
            );

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                form.reset();
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        } catch (error) {
            setStatus('error');
            setErrorMsg(
                error instanceof Error
                    ? error.message
                    : 'Something went wrong'
            );
        }
    };

    if (status === 'success') {
        return (
            <div className={className}>
                <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
                    <div className="text-4xl mb-4">🔥</div>

                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                        Message Sent Successfully
                    </h3>

                    <p className="text-green-700">
                        We've received your roar. We'll be in touch soon.
                    </p>

                    <button
                        type="button"
                        onClick={() => setStatus('idle')}
                        className="mt-6 px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-colors"
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={className}>
            <input
                type="hidden"
                name="access_key"
                value="1dab534d-b34b-4ff3-b003-a93655d8b113"
            />

            {children}

            {status === 'error' && (
                <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200">
                    <p className="text-red-600 text-sm">
                        {errorMsg}
                    </p>
                </div>
            )}

            {status === 'submitting' && (
                <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                    <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                    </svg>

                    Sending your message...
                </div>
            )}
        </form>
    );
}
