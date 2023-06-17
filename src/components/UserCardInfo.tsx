
import GithubLogo from "@/components/icons/GithubIcons"
const UserCardInfo = () => {
  return (
    <article className="grid-areas rounded-xl bg-gray-800 p-2 text-white">
        <div className="sectionLogo grid h-24 w-24 place-content-center rounded-full bg-gray-200 p-1">
            <GithubLogo className="relative top-2 h-full w-full"/>
        </div> 
        <div className="sectionTitle">
            <h2>The Octocat</h2>
            <p>@octocat</p>
        </div>
        <p className="sectionDate">Joined 25 Jan 2011</p>
        <p className="sectionDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex itaque voluptate veritatis, rerum exercitationem iusto earum necessitatibus quidem praesentium facilis dolore distinctio dolores qui alias aspernatur voluptas blanditiis natus sint!
        </p>
        <div className="sectionNumber flex justify-around bg-gray-900 rounded">
            <article>
                <p>Repos</p>
                <p>9</p>
            </article>
            <article>
                <p>Folloers</p>
                <p>3938</p>
            </article>
            <article>
                <p>Following</p>
                <p>11</p>
            </article>
        </div>
        <div className="sectionSocial md:grid md:grid-cols-2">
            <article>
                <i>Icono</i>
                <p>San Francisco</p>
            </article>
            <article>
                <i>Icono</i>
                <p>San Francisco</p>
            </article>
            <article>
                <i>Icono</i>
                <p>San Francisco</p>
            </article>
            <article>
                <i>Icono</i>
                <p>San Francisco</p>
            </article>
        </div>
    </article>
  )
}

export default UserCardInfo