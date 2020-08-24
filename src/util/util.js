import fs from 'fs'

import * as matter from 'gray-matter'


export const getMarkdownFiles = (path) => {
    const files = fs.readdirSync(path)
    let posts = files.map((file) => {
        let data = matter.read(`${path}/${file}`)
        data.orig = data.orig.toString()
        data.slug = file.slice(0, -3)
        return data
    })

    posts = posts.sort((a, b) => {
        return b.data.date - a.data.date
    })
    return posts;
}


export const getMarkdownFile = (path) => {
    let data = matter.read(path)
    data.orig = data.orig.toString()
    return data
}
