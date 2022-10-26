import React from 'react'
import { Step3 } from 'blocks'
import homepageData from '../../data/homepage'
import get from 'utils/get'

export default {
  title: 'Blocks/Step3',
}

export const Default = () => {
  const { steps: stepsProps } = homepageData

  return (
    <Step3
      step3Props={stepsProps[2]}
      steps={stepsProps.map(step => ({
        preTitle: step.preTitle,
        title: step.title,
      }))}
    />
  )
}

export const OtherColor = () => {
  const { steps: stepsProps } = homepageData

  return (
    <Step3
      step3Props={stepsProps[2]}
      steps={stepsProps.map(step => ({
        preTitle: step.preTitle,
        title: step.title,
      }))}
      color={get('colors.hotPink')}
    />
  )
}
