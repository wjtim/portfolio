import React from 'react'
import githubLogo from '../../Images/LogoImages/githubLogo.png'
import mailLogo from '../../Images/LogoImages/MailLogo.png'
import linkedInLogo from '../../Images/LogoImages/LinkedInLogo.png'
const Footer = () => {
  return (
    <div className='min-w-full p-2 my-5'>
    <ul className="justify-between mx-3 flex">
    <li className="mr-6 text-xl">
    </li>
      <ul className='justify-between mx-3 flex'>
          <li className='mr-6 text-lg'>
            <a className="hover:text-orange-500" href='https://github.com/wjtim' rel="noreferrer" target="_blank">
              <img src={githubLogo} alt={`github icon`} className="w-8 h-8 mb-2" />
            </a>
          </li>
          <li className='mr-6 text-lg'>
            <a className="hover:text-orange-500" href='https://www.linkedin.com/in/wyatt-timmermans-50659a222' rel="noreferrer" target="_blank">
              <img src={linkedInLogo} alt={`github icon`} className="w-8 h-8 mb-2" />
            </a>
          </li>
          <li className='mr-6 text-lg'>
            <a className="hover:text-orange-500" href="mailto:wjtimmermans15@gmail.com?subject=Hey, Wyatt!&body=Great looking site would love to get in touch!" rel="noreferrer" target="_blank">
              <img src={mailLogo} alt={`github icon`} className="w-8 h-8 mb-2" />
            </a>
          </li>
      </ul>
    </ul>
  </div>
  )
}

export default Footer