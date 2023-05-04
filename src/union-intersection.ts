// 2.8: Union, Intersection and Enum Types

type NoobDeveloper = {

    name: string;

};

// type JuniorDeveloper = {

// name:string;

// expertise: string;

// experience:number;

// }

type JuniorDeveloper = NoobDeveloper & {

    expertise: string;

    experience: number;

}

type NextLevelDeveloper = JuniorDeveloper & {

    leadershipExperience: number;

    level: 'junior' | 'mid' | 'senior';

}
type midLevelDeveloper = NextLevelDeveloper & {
    workingExperience: number;

    skill: 'react' | 'vue' | 'node'
}
const newDeveloper: NoobDeveloper | JuniorDeveloper = {

    name: 'moznu mia',

    expertise: 'javaScript',

    experience: 6,

}

const developer: NextLevelDeveloper = {

    name: 'Next Bhai',

    expertise: 'typescript',

    experience: 6,

    leadershipExperience: 2,

    level: 'senior',


}

const fullStackDeveloper: midLevelDeveloper = {
    name: 'full stack Bhai',

    expertise: 'typescript',

    experience: 6,

    leadershipExperience: 2,

    level: 'senior',

    workingExperience: 2,

    skill: 'node'

}