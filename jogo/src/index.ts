import {Command, flags} from '@oclif/command'

class Jogo extends Command {
  static description = 'describe the command here'

  static flags = {}

  static args = []

  async run() {
    const {args, flags} = this.parse(Jogo)

    this.log(`hello from .\\src\\index.ts`)
  }
}

export = Jogo
