import { ReactComponent as WebsiteLogo } from '../../../image/svgs/www.svg';
import { ReactComponent as GithubLogo } from '../../../image/svgs/github.svg';
import './Card.css';


function Card({ thumbnail, content }) {
    return (
        <div className='card-container'>
            <div className='card-thumbnail-container'>
                <img className='card-thumbnail' src={thumbnail} alt="thumbnail"/>  
            </div>
            <div className='card-bottom-half'>
                <div className='card-text-row'>
                    <h2 className='card-title'>{content.title}</h2>
                    <p className='card-subtitle'>{content.subtitle}</p>
                </div>
                <div className='button-row'>
                    <a className={content.url === "" ? 'hidden' : 'card-website-button card-button'} href={content.url} target="_blank" rel="noopener noreferrer">
                        <div className='button_logo_container'>
                            <WebsiteLogo className='button_logo' />
                        </div>
                        Website
                    </a>
                    <a className={content.github_url === "" ? 'hidden' : 'card-github-button card-button'} href={content.github_url} target="_blank" rel="noopener noreferrer">
                        <div className='button_logo_container'>
                            <GithubLogo className='button_logo' />
                        </div>
                        Github
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;