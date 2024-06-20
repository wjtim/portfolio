import React, { useState } from 'react'
import Terminal from 'react-console-emulator'


const MyTerminal = () => {
  let [location, setLocation] = useState("~")
  let [level, setLevel] = useState(0)
  let folders = [
    //Root Folder = Lv 0
    ["Desktop", "Documents"],
    //Desktop = Lv 1
    [""],
    //Documents = Lv 2 
    [""]
  ]
  
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
      fn: function(args){
        if (args === '..' && level > 0){
          setLocation("~")
          setLevel(level-1)
        }else if (args === "~") {
          setLocation("~")
          setLevel(0)
        }
        else {
        setLocation(args);
        setLevel(level+1)
        }
      }
    },
    level: {
      description: 'Show current directory level',
      usage: 'level',
      fn: function(){
        return level
      }
    }
  }
  return (
    <Terminal
      commands={commands}
      welcomeMessage={"Welcome to WJTIM.com type `help` for a list of commands "}
      promptLabel={`guest@WJTIM:${location}$`}
    />
  )
}
export default MyTerminal