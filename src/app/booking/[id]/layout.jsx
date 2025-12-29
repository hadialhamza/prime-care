const servicesDB = {
    "baby-sitting": {
        title: "Baby Sitting",
    },
    "elderly-care": {
        title: "Elderly Care",
    },
    "sick-care": {
        title: "Sick & Special Needs",
    },
};

export async function generateMetadata({ params }) {
    const { id } = await params;
    const service = servicesDB[id];

    return {
        title: service ? `Booking - ${service.title}` : "Booking Service",
    };
}

export default function BookingLayout({ children }) {
    return <>{children}</>;
}
