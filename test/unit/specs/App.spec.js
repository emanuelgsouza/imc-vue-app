import App from '@/App'
import { mount } from 'vue-test-utils'

describe('App.vue - canLoadResult computed', () => {
  it('Valor inicial de canLoadResult retorna false', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm
    expect(vm.canLoadResult).toBeFalsy()
  })

  it('Quando heigth e weight forem preenchidos, canLoadResult retorna true', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm
    vm.heigth = '1.70'
    vm.weight = '80'
    expect(vm.canLoadResult).toBeTruthy()
  })
})

describe('App.vue - resultImcCalc computed', () => {
  it('Valor inicial de resultImcCalc é null', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm
    expect(vm.resultImcCalc).toBeNull()
  })

  it('Quando heigth = 1.70 e weight = 80, resultImcCalc retorna 27.68', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm
    vm.heigth = '1.70'
    vm.weight = '80'
    expect(vm.resultImcCalc).toBe('27.68')
  })

  it('Quando heigth = 1.70 e weight = 90, resultImcCalc retorna 31.14', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm
    vm.heigth = '1.70'
    vm.weight = '90'
    expect(vm.resultImcCalc).toBe('31.14')
  })

  it('Quando heigth = 1.70 e weight = 90, resultImcCalc retorna 31.14', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm
    vm.heigth = '1.70'
    vm.weight = '90'
    vm.genre = 'M'
    expect(vm.resultImcCalc).toBe('31.14')
  })

  it('Quando heigth = 1.70 e weight = 80 e o genero for masculino resultImcCalc retorna 27.68', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm
    vm.heigth = '1.70'
    vm.weight = '80'
    vm.genre = 'M'
    expect(vm.resultImcCalc).toBe('27.68')
  })
})

describe('App.vue - resultCategory computed', () => {
  it('Valor inicial de resultCategory é null', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm
    expect(vm.resultCategory).toBeNull()
  })

  it('Quando heigth e weight forem preenchidos e o genero for masculino', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm
    vm.heigth = '1.70'
    vm.weight = '90'
    vm.genre = 'M'
    expect(vm.resultCategory).toBe('Obeso')
  })

  it('Quando heigth e weight forem preenchidos, resultCategory retorna Acima do peso', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm
    vm.heigth = '1.70'
    vm.weight = '80'
    expect(vm.resultCategory).toBe('Acima do peso')
  })
})

describe('App.vue - loadIdealWeight computed', () => {
  it('Valor inicial de loadIdealWeight é objeto vazio', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm
    expect(vm.loadIdealWeight).toEqual({})
  })

  it('Quando heigth e weight forem preenchidos e o genero for masculino', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm
    const expected = {
      minWeightIdeal: '59.82',
      maxWeightIdeal: '76.27'
    }

    vm.heigth = '1.70'
    vm.weight = '90'
    vm.genre = 'M'
    expect(vm.loadIdealWeight).toEqual(expected)
  })

  it('Quando heigth e weight forem preenchidos e o genero for feminino', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm
    const expected = {
      minWeightIdeal: '45.89',
      maxWeightIdeal: '61.96'
    }

    vm.heigth = '1.55'
    vm.weight = '60'
    vm.genre = 'F'
    expect(vm.loadIdealWeight).toEqual(expected)
  })
})

describe('App.vue - minWeightIdeal computed', () => {
  it('Valor inicial de minWeightIdeal é uma string vazia', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm
    expect(vm.minWeightIdeal).toBe('')
  })

  it('Quando heigth e weight forem preenchidos e o genero for masculino', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm

    vm.heigth = '1.70'
    vm.weight = '90'
    vm.genre = 'M'
    expect(vm.minWeightIdeal).toBe('59.82')
  })

  it('Quando heigth e weight forem preenchidos e o genero for feminino', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm

    vm.heigth = '1.55'
    vm.weight = '60'
    vm.genre = 'F'
    expect(vm.minWeightIdeal).toEqual('45.89')
  })
})

describe('App.vue - maxWeightIdeal computed', () => {
  it('Valor inicial de maxWeightIdeal é uma string vazia', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm
    expect(vm.maxWeightIdeal).toBe('')
  })

  it('Quando heigth e weight forem preenchidos e o genero for masculino', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm

    vm.heigth = '1.70'
    vm.weight = '90'
    vm.genre = 'M'
    expect(vm.maxWeightIdeal).toBe('76.27')
  })

  it('Quando heigth e weight forem preenchidos e o genero for feminino', () => {
    const wrapper = mount(App)
    const vm = wrapper.vm

    vm.heigth = '1.55'
    vm.weight = '60'
    vm.genre = 'F'
    expect(vm.maxWeightIdeal).toEqual('61.96')
  })
})
