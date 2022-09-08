import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreatePokemonDto) {
    return this.prisma.pokemon.create({ 
      data,
      include: {
        Images: true
      }  
    })
  }

  findAll() {
    return this.prisma.pokemon.findMany({
      include: {
        Images: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.pokemon.findUnique({
      where: { id },
      include: {
        Images: true
      }
    })
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return this.prisma.pokemon.update({
      where: { id },
      data: updatePokemonDto,
      include: {
        Images: true
      }
    })
  }

  remove(id: number) {
    return this.prisma.pokemon.delete({
      where: { id }
    })
  }
}
