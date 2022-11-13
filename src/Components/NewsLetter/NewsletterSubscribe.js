import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from 'NewsletterForm';

const NewletterSubscribe = () => {

    const MAILCHMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

return(
    <MailchimpSubscribe
    url={ MAILCHMP_URL }
    render={ ( props ) => {
        const { subscribe, status, message } = props || {};
        return (
            <NewsletterForm
            status={ status }
            message={ message }
            onValidated={ formData => subscribe( formData ) }
            />
        );
    } }
    />
);

};

export default NewletterSubscribe;