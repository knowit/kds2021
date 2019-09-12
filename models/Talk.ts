import languages from './Languages.json';

class Talk {
    name: string = ""
    description: string = ""
    outline: string = ""
    type: string = "Lightning talk"
    duration: number = 10
    difficulty: string = "beginner"
    language: string = languages[0]
    tags: Array<string> = []
    speaker: any = null
    cospeakers: Array<any> = []
    owner: string = ""
}

export default Talk;