import React, { useState, useRef } from 'react'
import Terminal from 'react-console-emulator'


const MyTerminal = () => {
  const fileSystem = {
    name: "~",
    children: [
      {
        name: "Documents",
        children: [
          { name: "Secret", children: []},
          { name: "qualifications.li", children: [] },
          { name: "algorithms.li", children: [] },
        ],
      },
      {
        name: "Desktop",
        children: [
          {
            name: "Games",
            children: [
              { name: "gamble.script", children: [] },
            ],
          },
          { 
            name: "Decklists", 
            children: [
              { name: "Atog.li", children: [] },
              { name: "Breya.li", children: [] },
              { name: "Chulane.li", children: [] },
              { name: "Firesong.li", children: [] },
              { name: "Geralf.li", children: [] },
              { name: "Gishath.li", children: [] },
              { name: "Grenzo.li", children: [] },
              { name: "Horde.li", children: [] },
              { name: "Meren.li", children: [] },
              { name: "Okaun.li", children: [] },
              { name: "Rinseri.li", children: [] },
            ]
          },
        ],
      },
    ],
  };

  const displayCurrentNode = () => {
    return currentNode.children.map((child, index) => (
      <li className="list-none" key={index}>
        {child.name}
      </li>
    ));
  };

  const navigateToChild = (childName) => {
    const child = currentNode.children.find(c => c.name.toLowerCase() === childName.toLowerCase());
    if (child && child.children.length > 0) {
      setCurrentNode(child);
      setPath(prevPath => [...prevPath, child.name]);
      setLocation(childName)
    } else {
      return "Folder not found, if target is a file use 'open <FileName>.<FileExtension>'";
    }
  };

  const navigateUp = () => {
    if (path.length > 1) {
      setPath(prevPath => {
        const newPath = prevPath.slice(0, -1);
        let node = fileSystem;
        newPath.slice(1).forEach(name => {
          node = node.children.find(c => c.name === name);
        });
        setCurrentNode(node);
        setLocation(node.name)
        return newPath;
      });
    } else {
      return "Already at root";
    }
  };

  const navigateToRoot = () => {
    setCurrentNode(fileSystem);
    setPath(["root"]);
    setLocation("~")
  };
  const terminalRef = useRef(null)
  const [currentNode, setCurrentNode] = useState(fileSystem);
  const [path, setPath] = useState(["root"]);
  let [location, setLocation] = useState("~")
  let [coins, setCoins] = useState(2)
  
  const commands = {
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>\n----------',
      fn: (...args) => args.join(' ')
    },
    ls: {
      description: 'List All files and folders in the current directory',
      usage: 'ls\n----------',
      fn: function(){
        return displayCurrentNode()
      }
    },
    cd: {
      description: 'Navigate to a new directory. ".." moves 1 level above the current location. Return to root with "~"',
      usage: 'cd <FolderName>\n----------',
      fn: function(args){
        if (args === '..'){
          return navigateUp()
        }else if (args === "~") {
          return navigateToRoot()
        }else if (args.toLowerCase() === "ruthie"){
          return <ul className='list-none'>
            <li className='text-red-500'>{"__"}{"__"}{"__"}{"__"}{"__"}{"__"}{"__"}</li>
            <li className='text-pink-500'>{"|_"}{"<3"}{"<3"}{"__"}{"<3"}{"<3"}{"_|"}</li>
            <li className='text-purple-500'>{"|_"}{"<3"}{"<3"}{"<3"}{"<3"}{"<3"}{"_|"}</li>
            <li className='text-red-500'>{"|_"}{"<3"}{"<3"}{"<3"}{"<3"}{"<3"}{"_|"}</li>
            <li className='text-pink-500'>{"|_"}{"__"}{"<3"}{"<3"}{"<3"}{"__"}{"_|"}</li>
            <li className='text-purple-500'>{"|_"}{"__"}{"__"}{"<3"}{"__"}{"__"}{"_|"}</li>
          </ul>
        }else if(args.toLowerCase() === "secret"){
          return "Guest - Access Denied"
        }
        else {
          return navigateToChild(args)
        }
      }
    },
    open:{
      description: 'Open a file located in your current directory level',
      usage: 'open <FileName>\n----------',
      fn: function(args){
        const terminal = terminalRef.current
        const child = currentNode.children.find(c => c.name === args);
        if(child && args === "gamble.script"){
          let luckyNumber = Math.floor(Math.random() * 10) + 1
          let matchNumber = Math.floor(Math.random() * 10) + 1
          terminal.pushToStdout(<p className='text-green-500'>$ Welcome to the Gambler, Best of Luck! $</p>)
          if(coins > 0){
            setTimeout(() => terminal.pushToStdout('Your lucky number is ' + luckyNumber), 1500)
            setTimeout(() => terminal.pushToStdout("Generating random number"), 3000)
            setTimeout(() => terminal.pushToStdout("The dealers number is " + matchNumber), 4500)
          }else{
            setTimeout(() => terminal.pushToStdout("Sorry you need coins to play this game! Try refreshing to start over fresh"), 1500)
            return
          }
            if (luckyNumber >= matchNumber){
              setCoins(coins*2)
              setTimeout(() => terminal.pushToStdout(luckyNumber + " >= " +  matchNumber +" You win!"), 6000)
              setTimeout(() => terminal.pushToStdout("You now have " + coins + " coins!"), 7000)
            }
            else{
              setCoins(0)
              setTimeout(() => terminal.pushToStdout(luckyNumber + " < " +  matchNumber +" so sorry :("), 6000)
              setTimeout(() => terminal.pushToStdout("Looks like you've lost it all..."), 7000)
              setTimeout(() => terminal.pushToStdout("Hope to see you again soon!"), 8000)
            return 
          }
        }else if(child && args === "qualifications.li"){
          return <ul className='list-none'>
          <li className='text-yellow-500'>{"Bachelor of Computer Science - UVic"}</li>
          <li className='text-red-500'>{"3+ Years HTML"}</li>
          <li className='text-blue-500'>{"3+ Years CSS"}</li>
          <li className='text-blue-500'>{"3+ Years Python"}</li>
          <li className='text-yellow-500'>{"3+ Years Javascript"}</li>
          <li className='text-red-500'>{"3+ Years Java"}</li>
          <li className='text-blue-500'>{"3+ Years SQL"}</li>
          <li className='text-blue-500'>{"1 Year C"}</li>
          <li className='text-blue-500'>{"1 Year C++"}</li>
        </ul>
        }else if(child && args === "algorithms.li"){
          return <ul className='list-none'>
          <li className='text-yellow-500'>{"Bachelor of Computer Science - UVic"}</li>
        </ul>
        }
        else{
          return "File '" + args + "' not found"
        }
      }
    },
    stupidai: {
      description: 'Get an answer to a question from stupidAI',
      usage: 'stupidai <string>\n----------',
      fn: (...args) => {
        const request = args.join(' ')
        const terminal = terminalRef.current
        setTimeout(() => terminal.pushToStdout('Hmmmmmm'), 1000)
        setTimeout(() => terminal.pushToStdout("That's a good question"), 2000)
        setTimeout(() => terminal.pushToStdout("...Thinking..."), 3000)
        setTimeout(() => terminal.pushToStdout(".............."), 4500)
        setTimeout(() => terminal.pushToStdout(".............."), 6500)
        setTimeout(() => terminal.pushToStdout("Really scraping the web for this answer"), 7500)
        setTimeout(() => terminal.pushToStdout(".............."), 8500)
        setTimeout(() => terminal.pushToStdout("From what I've found"), 10000)
        setTimeout(() => terminal.pushToStdout("..."), 12500)
        setTimeout(() => terminal.pushToStdout("I don't know"), 14000)
        setTimeout(() => terminal.pushToStdout("Sorry :^("), 16000)
        return "'" + request + "'"
      }
    },
  }
  return (
    <Terminal
      commands={commands}
      ref={terminalRef}
      autoFocus={true}
      welcomeMessage={false}
      errorText={'Command \'[command]\' not found!\nEnter \'help\' for a list of commands'}
      promptLabel={`guest@WJTIM:${location}$`}
    />
  )
}
export default MyTerminal