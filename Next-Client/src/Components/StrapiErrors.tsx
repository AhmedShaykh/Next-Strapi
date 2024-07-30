interface StrapiErrorsProps {
    message: string | null;
    name: string;
    status: string | null;
};

const StrapiErrors = ({ error }: { readonly error: StrapiErrorsProps }) => {

    if (!error?.message) return null;

    return <div className="text-red-500 text-md italic py-2">{error.message}</div>;

};

export default StrapiErrors;