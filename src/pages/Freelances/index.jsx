import logo from  '../../logo.svg'
import Card from "../../components/Card";

const freelanceProfiles =  [
    {
        name: 'Zuckerberg',
        jobTitle: 'Devops',
        picture: logo,
    },
    {
        name: 'Jack Ma',
        jobTitle: 'Entrepreneur',
        picture: logo,
    },
    {
        name: 'Placide FOLEU',
        jobTitle: 'Developpeur Fullstack',
        picture: logo,
    },
]




function Freelances() {
    return(
        <div>
            <h1>Freelances</h1>
            {freelanceProfiles.map((profile, index) =>(
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
        </div>
    )
}
export default Freelances