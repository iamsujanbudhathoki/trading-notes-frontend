// Exness brand icon
export function ExnessIcon({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.3" />
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// Discord brand icon
export function DiscordIcon({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
    );
}

// Forex/Currency icon
export function ForexIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M12 3C12 3 15 6 15 12C15 18 12 21 12 21" stroke="currentColor" strokeWidth="2" />
            <path d="M12 3C12 3 9 6 9 12C9 18 12 21 12 21" stroke="currentColor" strokeWidth="2" />
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" />
            <path d="M5 8H19" stroke="currentColor" strokeWidth="2" />
            <path d="M5 16H19" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}

// Crypto/Bitcoin icon
export function CryptoIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M9 8H13.5C14.88 8 16 9.12 16 10.5C16 11.88 14.88 13 13.5 13H9V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 13H14C15.1 13 16 13.9 16 15C16 16.1 15.1 17 14 17H9V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 6V8M11 17V19M13 6V8M13 17V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

// Stock/Chart icon
export function StockIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 16L11 12L15 14L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="7" cy="16" r="1.5" fill="currentColor" />
            <circle cx="11" cy="12" r="1.5" fill="currentColor" />
            <circle cx="15" cy="14" r="1.5" fill="currentColor" />
            <circle cx="21" cy="8" r="1.5" fill="currentColor" />
        </svg>
    );
}

// Options icon
export function OptionsIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
            <path d="M7 7L7 7.01M17 7L17 7.01M7 17L7 17.01M17 17L17 17.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );
}

// Calculator icon
export function CalculatorIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
            <rect x="7" y="5" width="10" height="3" rx="1" fill="currentColor" />
            <circle cx="8" cy="12" r="1" fill="currentColor" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="16" cy="12" r="1" fill="currentColor" />
            <circle cx="8" cy="16" r="1" fill="currentColor" />
            <circle cx="12" cy="16" r="1" fill="currentColor" />
            <circle cx="16" cy="16" r="1" fill="currentColor" />
        </svg>
    );
}

// Calendar icon
export function CalendarIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
            <path d="M8 2V6M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="8" cy="14" r="1" fill="currentColor" />
            <circle cx="12" cy="14" r="1" fill="currentColor" />
            <circle cx="16" cy="14" r="1" fill="currentColor" />
            <circle cx="8" cy="18" r="1" fill="currentColor" />
            <circle cx="12" cy="18" r="1" fill="currentColor" />
        </svg>
    );
}

// Heatmap icon
export function HeatmapIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="4" height="4" rx="1" fill="currentColor" opacity="0.3" />
            <rect x="10" y="3" width="4" height="4" rx="1" fill="currentColor" opacity="0.6" />
            <rect x="17" y="3" width="4" height="4" rx="1" fill="currentColor" opacity="0.9" />
            <rect x="3" y="10" width="4" height="4" rx="1" fill="currentColor" opacity="0.5" />
            <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" opacity="0.8" />
            <rect x="17" y="10" width="4" height="4" rx="1" fill="currentColor" opacity="0.4" />
            <rect x="3" y="17" width="4" height="4" rx="1" fill="currentColor" opacity="0.7" />
            <rect x="10" y="17" width="4" height="4" rx="1" fill="currentColor" opacity="0.3" />
            <rect x="17" y="17" width="4" height="4" rx="1" fill="currentColor" opacity="1" />
        </svg>
    );
}
