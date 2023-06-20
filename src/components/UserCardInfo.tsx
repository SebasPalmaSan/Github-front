//import GithubLogo from "@/components/icons/GithubIcons";
import LocationIcon from "@/components/icons/LocationIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import { User } from "@/interfaces/user";
import Image from "next/image";

interface Props {
    user: User;
}

function validateUrl(url: string) {
    if(!/^https?:\/\//i.test(url)){
        url = 'https://'+ url;
    }
    return url;
}

const UserCardInfo = ({user}: Props) => {
  return (
    <article className="grid-areas rounded-xl bg-gray-800 p-4 text-white">
        <div className="border-4 border-solid overflow-hidden sectionLogo grid h-24 w-24 place-content-center rounded-full bg-gray-200 p-1 mr-3 lg:mx-auto">
            <Image src={user.avatar_url} width={96} height={96} alt={`profile img user ${user.name}`}/>
            {/* <GithubLogo className="relative top-2 h-full w-full"/> */}
        </div> 
        <div className="sectionTitle">
            <h2 className="text-3xl font-bold">{user.name}</h2>
            <p>@{user.login}</p>
        </div>
        <p className="sectionDate lg:text-right">{
            new Date(user.created_at || '').toLocaleDateString('es', {
                year:'numeric',
                month:'long',
                day:'numeric',
            })
        }</p>
        <p className="sectionDescription mt-4 leading-loose">
            {user.bio ||'Sin user bio'}
        </p>
        <div className="p-6 mt-4 sectionNumber flex justify-around bg-gray-900 rounded-xl text-center">
            <article>
                <p>Repos</p>
                <p className="font-bold text-xl">{user.public_repos}</p>
            </article>
            <article>
                <p>Followers</p>
                <p className="font-bold text-xl">{user.followers}</p>
            </article>
            <article>
                <p>Following</p>
                <p className="font-bold text-xl">{user.following}</p>
            </article>
        </div>
        <div className="mt-4 sectionSocial md:grid md:grid-cols-2 space-y-2">
            <article className="flex space-x-2">
                <i>
                    <LocationIcon 
                        className="h-full w-full fill-white" 
                        width={"1rem"}
                    />
                </i>
                <a href="#">{user.location}</a>
            </article>
            <article className="flex space-x-2">
                <i>
                    <LinkIcon 
                        className="h-full w-full fill-white" 
                        width={"1rem"} 
                    />
                </i>
                <a href={validateUrl(user?.blog)}>{user?.blog || 'not information'}</a>
            </article>
            <article className="flex space-x-2">
                <i>
                    <TwitterIcon 
                        className="h-full w-full fill-white" 
                        width={"1rem"}
                    />
                </i>
                <a href={`https://www.twitter.com/${user?.twitter_username}`}>{user?.twitter_username || 'not information' }</a>
            </article>
            <article className="flex space-x-2">
                <i>
                    <BuildingIcon 
                        className="h-full w-full fill-white" 
                        width={"1rem"}
                    />
                </i>
                <span>{user?.company || 'not information' }</span>
            </article>
        </div>
    </article>
  )
}

export default UserCardInfo