module.exports = {
  onPreBuild: () => {
    console.log('Hellooo PreBuild ヽ(^。^)丿!')
  },
  onBuild: ({ constants, inputs }) => {
    console.log('onPostBuild: I run _after_ build commands are executed ✅')
    console.log('Here are some other things I know thanks to constants:')
    console.log(constants)
    console.log(`Oh, and your database URL is: ${inputs.databaseUrl}.`)
  },
  onPostBuild: ({ utils }) => {
    console.log('onBuild: I run on build')
    try {
      throw new Error('This is the error 🚨')
    } catch (error) {
      utils.build.failBuild(`This will fail the build ${error}.`)
    }
  }
}
