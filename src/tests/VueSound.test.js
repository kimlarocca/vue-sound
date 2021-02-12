import { mount } from '@vue/test-utils'
import VueSound from '../components/VueSound'
import { describe, test, expect } from '@jest/globals'

describe('VueSound', () => {
  test('file prop works', () => {
    // test if the file prop works by using a blank base64 wav file
    const file = 'data:audio/wave;base64,UklGRjIAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAAABmYWN0BAAAAAAAAABkYXRhAAAAAA=='
    const wrapper = mount(VueSound, {
      propsData: {
        file
      }
    })
    // check if props were passed correctly
    expect(wrapper.vm.file).toEqual(file)
  })

  test('back 15 button works', () => {
    const wrapper = mount(VueSound)
    // move the current time to 60 seconds so we can go back 15 seconds
    wrapper.vm.audio.currentTime = 60
    const div = wrapper.get('.player-back-15-icon')
    div.trigger('click')
    expect(wrapper.vm.audio.currentTime).toBe(45)
  })

  test('ahead 15 button works', () => {
    const wrapper = mount(VueSound)
    // check that start/current time is 0
    expect(wrapper.vm.audio.currentTime).toBe(0)
    const div = wrapper.get('.player-ahead-15-icon')
    div.trigger('click')
    expect(wrapper.vm.audio.currentTime).toBe(15)
  })

  test('title prop works', () => {
    const wrapper = mount(VueSound, {
      propsData: {
        title: 'The Show'
      }
    })
    // check if props were passed correctly
    expect(wrapper.vm.title).toBe('The Show')
    const div = wrapper.find('.player-track-title')
    // check if title was rendered correctly
    expect(div.text()).toBe('The Show')
  })

  test('title-link prop works', () => {
    const wrapper = mount(VueSound, {
      propsData: {
        title: 'The Show',
        titleLink: 'http://www.titlelink.com'
      }
    })
    // check if props were passed correctly
    expect(wrapper.vm.title).toBe('The Show')
    expect(wrapper.vm.titleLink).toBe('http://www.titlelink.com')
    // check if link was rendered correctly
    const div = wrapper.find('.player-track-title-link')
    expect(div.attributes('href')).toBe('http://www.titlelink.com')
  })

  test('details prop works', () => {
    const wrapper = mount(VueSound, {
      propsData: {
        details: 'lorem ipsum dolor'
      }
    })
    // check if props were passed correctly
    expect(wrapper.vm.details).toBe('lorem ipsum dolor')
    const div = wrapper.find('.player-track-title-details')
    // check if title was rendered correctly
    expect(div.text()).toBe('lorem ipsum dolor')
  })

  test('details-link prop works', () => {
    const wrapper = mount(VueSound, {
      propsData: {
        details: 'lorem ipsum dolor',
        detailsLink: 'http://www.descriptionlink.com'
      }
    })
    // check if props were passed correctly
    expect(wrapper.vm.details).toBe('lorem ipsum dolor')
    expect(wrapper.vm.detailsLink).toBe('http://www.descriptionlink.com')
    // check if link was rendered correctly
    const div = wrapper.find('.player-track-title-details-link')
    expect(div.attributes('href')).toBe('http://www.descriptionlink.com')
  })

  test('mute button works', () => {
    const wrapper = mount(VueSound)
    const div = wrapper.get('.player-volume-icon')
    div.trigger('click')
    expect(wrapper.vm.volume).toBe(0)
  })

  test('volume slider works', () => {
    const wrapper = mount(VueSound)
    const slider = wrapper.find('#playerVolume')
    slider.setValue(30)
    expect(wrapper.vm.volume).toBe('30')
  })

  test('download button is not visible by default', () => {
    const wrapper = mount(VueSound)
    expect(wrapper.vm.showDownload).toBe(false)
    const div = wrapper.find('.player-download-icon')
    expect(div.exists()).toBe(false)
  })

  test('download prop works', () => {
    const wrapper = mount(VueSound, {
      propsData: {
        showDownload: true
      }
    })
    expect(wrapper.vm.showDownload).toBe(true)
    const div = wrapper.find('.player-download-icon')
    expect(div.exists()).toBe(true)
  })

  test('livestream prop is false by default', () => {
    const wrapper = mount(VueSound)
    expect(wrapper.vm.livestream).toBe(false)
    const div = wrapper.find('.track-info-livestream')
    expect(div.exists()).toBe(false)
  })

  test('livestream prop works', () => {
    const wrapper = mount(VueSound, {
      propsData: {
        livestream: true
      }
    })
    expect(wrapper.vm.livestream).toBe(true)
  })

  test('track progress is visible if livestream is set to false', () => {
    const wrapper = mount(VueSound)
    expect(wrapper.vm.livestream).toBe(false)
    const div = wrapper.find('.player-track-progress')
    expect(div.exists()).toBe(true)
  })

  test('track progress is not visible if livestream is set to true', () => {
    const wrapper = mount(VueSound, {
      propsData: {
        livestream: true
      }
    })
    expect(wrapper.vm.livestream).toBe(true)
    const div = wrapper.find('.player-track-progress')
    expect(div.exists()).toBe(false)
  })

  test('track time is visible if livestream is set to false', () => {
    const wrapper = mount(VueSound)
    expect(wrapper.vm.livestream).toBe(false)
    const div = wrapper.find('.player-track-time')
    expect(div.exists()).toBe(true)
  })

  test('track time is not visible if livestream is set to true', () => {
    const wrapper = mount(VueSound, {
      propsData: {
        livestream: true
      }
    })
    expect(wrapper.vm.livestream).toBe(true)
    const div = wrapper.find('.player-track-time')
    expect(div.exists()).toBe(false)
  })
})
