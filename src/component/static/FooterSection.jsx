
import styled from "styled-components"
import logo from "../../assets/favicon2.svg"
import Img from "../../assets/laptop.jpg"
import { FaLocationDot } from "react-icons/fa6"
import { HiMail } from "react-icons/hi"
import { FaPhoneAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import indian from "../../assets/indiaflag.png"
import bgImag from '../../assets/otherImage/footerbg.jpg'
import footerImg from '../../assets/otherImage/footer_image.png'
import foterImg from '../../assets/otherImage/footer_img.png'
import footer from '../../assets/otherImage/footer-corner.png'

const FooterSection = () => {
    return (
        <div>

            <div class="bg-white -mt-10 -mb-10 bg-gradient-to-t from-teal-700 to-emerald-100">
                <div class="mx-auto max-w-7xl px-2 lg:px-2">
                    <div class="mx-auto mt-16 max-w-2xl  sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">

                        <div class="p-8 sm:p-10 lg:flex-auto ">
                            <h3 class="text-2xl font-bold tracking-tight text-gray-900 ">Contact Us</h3>
                            <div class="flex  gap-x-4 ">
                                <div class="h-px flex-auto bg-gray-100"></div>
                            </div>
                            <ul role="list" class=" grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                                <Div>
                                    <Holder >
                                        <Icon>
                                            <FaLocationDot />
                                        </Icon>
                                        <Spans> KANTI SADAN , KURTHAUL BAGICHA , KURTHAUL PATNA-804453</Spans>
                                    </Holder>
                                    <Holder className="mt-1">
                                        <Icon>
                                            <FaLocationDot />
                                        </Icon>
                                        <Spans> JAGATSINGHPUR , ODISHA , 754103</Spans>
                                    </Holder>
                                    <Holder className="mt-1">
                                        <Icon>
                                            <HiMail />
                                        </Icon>
                                        <Spans> hrdepartment@kjxsofttech.com </Spans>
                                    </Holder>
                                    <Holder>
                                        <Icon>
                                            <FaPhoneAlt />
                                        </Icon>
                                        <Hold>
                                            <P>
                                                <Icons src={indian} alt="flag" />
                                                
                                                <Span >(+91) 9661087999 </Span>
                                            </P>
                                           

                                        </Hold>
                                    </Holder>
                                </Div>
                            </ul>
                        </div>
                        <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div class="text-center  lg:flex lg:flex-col lg:justify-center lg:py-16">
                                <div class="mx-auto max-w-lg px-8">
                                    <img src={logo} />

                                    <p class="mt-1 text-lg leading-5 text-white">We Believe In Maximizing The Output</p>
                                    <div class="flex sm:justify-center space-x-6 mt-5">
                                        <a href="https://www.facebook.com/KJXSOFTTECH2020" class="text-white hover:text-white">
                                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                        <a href="https://www.instagram.com/kjxsofttech/" class="text-white hover:text-white">
                                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                        <a href="https://twitter.com/KJXSOFTTECH"  class="text-white hover:text-white">
                                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                                </path>
                                            </svg>
                                        </a>
                                        <a href="https://www.linkedin.com/company/kjxsofttech/?viewAsMember=true" class="text-white hover:text-white">
                                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )

}

export default FooterSection;

const P = styled.p`
    margin:0;
    color:#fff;
    display:flex;
    img {
        border-radius: 30%; }
`

const HolderTwo = styled.div`
    margin-top:-5px;
    margin-bottom: 20px;
`

const Icons = styled.img`
    width:40px;
    height:30px;
    color:#fff;
    margin-right:10px;
    object-fit:contain;
`

const Icon = styled.div`
    width:30px;
    height:30px;
    /* background-color:gray; */
    margin-right:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`

const Holders = styled.div`
    width:100%;
    margin:20px 0px;
    display: flex;
    justify-content: center;
`

const Hold = styled.div`
    width:80%;
    height: 60px;
    display: flex;
    flex-direction: column;
`

const Holder = styled.div`
    width:100%;
    
    display: flex;
    justify-content: start;
`

const Div = styled.div`
    
`

const Li = styled(Link)`
    width:100%;
    font-size: 15px;
    cursor: pointer;
    /* margin:0px 20px; */
    color:#fff;
    text-decoration:none;
    transition:all 500ms;
`

const Line = styled.div`
    width:70px;
    margin:20px 0px;
    color:#fff;
    border:2px solid #000;
`

const H1 = styled.h1`
    margin:0;
    font-size: 20px;
    color:#fff;
`

const Title = styled.div`
 @media (max-width:767px){
       text-align: -webkit-center;
    }
`

const Ul = styled.div`
    width:50%;
    margin:20px 0px;
    display: flex;
    flex-direction: column;

       
    @media (min-width:767px){
        margin:unset;
    }
`

const Spans = styled.span`
    width:80%;
    color:#fff;
    font-size: 16px;
`

const Span = styled.span`
    margin:10px 0px;
    width:70%;
    color:#fff;
    word-spacing:5px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-content:space-around ;
`

const Navs = styled.div`
    width:100%;
     @media (max-width:767px){
       text-align: -webkit-center;
    }
`

const Logo = styled.img`
    width:150px;
    height:70px;
    object-fit:contain;

     @media (max-width:767px){
        text-align: -webkit-center;
    }
`

const Wrapper = styled.div`
    width:97%;
    height:100%;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:flex-start;
    padding: 20px 0px;

    @media (min-width:1025px){
        width:89%;
    }

    
    @media (min-width:767px){
        flex-direction: unset;
    }
`

const Footer = styled.footer`
    width:100%;
    background-image:url(${footer});
    background-repeat:no-repeat;
    background-size:cover;
    
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:17px;
`