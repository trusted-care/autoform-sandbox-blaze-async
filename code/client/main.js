import './main.html'

import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { Tracker } from 'meteor/tracker'
import SimpleSchema from 'simpl-schema'

import { AutoFormPlainTheme } from 'meteor/communitypackages:autoform-plain/dynamic'

import 'meteor/aldeed:autoform/dynamic'

const autoFormLoaded = new ReactiveVar()

AutoFormPlainTheme.load()

async function init () {
    await AutoForm.load()
    await AutoFormPlainTheme.load()
    // theme is imported, you can now make the form available
    // you could use a reactive var that resolves to true here
    // or any other mechanism you like to use to reactively activate the form
    AutoForm.setDefaultTemplate('plain')
}

(function () {
    init()
        .catch(e => console.error('[autoForm]: init failed - ', e))
        .then(() => {
            autoFormLoaded.set(true)
            console.info('[autoForm]: initialized')
        })
})()

Books = new Mongo.Collection("books")
Books.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    author: {
        type: String,
        label: "Author"
    },
    copies: {
        type: Number,
        label: "Number of copies",
        min: 0
    },
    lastCheckedOut: {
        type: Date,
        label: "Last date this book was checked out",
        optional: true
    },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
    }
}));

Template.insertBookForm.helpers({
    loadComplete() {
        return autoFormLoaded.get()
    }
})