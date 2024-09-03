import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import PinterestIcon from "./PinterestIcon";
import TwitterIcon from "./TwitterIcon";

export default function SocialMedia(){
    return(
        <>
            <div className="container-social flex gap-8">
                <FacebookIcon/>
                <TwitterIcon/>
                <PinterestIcon/>
                <InstagramIcon/>
            </div>

        </>
    );
}