
function isolateLanguages(repos) {
    var languages = []
    for (let i = 0; i < repos.length; i++) { languages.push(repos[i].language) } 
    languages = languages.filter(word => word != null) // filters out null values 
    return languages
}


function countLanguages(languages) {  
    var counter = []

    // retrieve the language types
    const uniqueSet = new Set(languages);
    const uniqLanguages = [...uniqueSet] // => [ HTML, JavaScript, Ruby ]

    for (let i = 0; i < uniqLanguages.length; i++) { 
        let occurences = languages.filter((language) => {return language === uniqLanguages[i]}).length 
        counter.push({ language: uniqLanguages[i], occurences: occurences })
    }
    return counter
}   