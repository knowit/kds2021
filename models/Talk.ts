class Talk {
    name: string = ""
    description: string = ""
    outline: string = ""
    type: string = "Lightning talk"
    difficulty: string = "beginner"
    language: string = "norwegian"
    tags: Array<string> = []
    speaker: any = null
    cospeakers: Array<any> = []
    owner: string = ""
}

export default Talk;