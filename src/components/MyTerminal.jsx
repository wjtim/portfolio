import React, { Component } from 'react'
import Terminal from 'react-console-emulator'

let folders =[
  //~ = Level 0
  ['Desktop ', 'Documents '],
  //Desktop = Level 1 
  ['Games', ]
  //Documents = Level 2 
]
let location='~'
let level=0

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  },
  ls: {
    description: 'List All Files and Folders in the current directory',
    usage: 'ls',
    fn: function(){
      return folders[level]    
    }
  },
  cd: {
    description: 'Navigate to a new directory with .. being the level above your current directory.',
    usage: 'cd <FilePath>',
    fn: function(...args){
      location='desktop'
      return args
    }
  }
}

export default class MyTerminal extends Component {
  render () {
    return (
      <Terminal
        commands={commands}
        promptLabel={`guest@WJTIM:${location}$`}
      />
    )
  }
}