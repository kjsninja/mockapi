const prisma = require('../helper/db');
const { checkPrismaError } = require('../helper/prismaErrors');

class Phases{
  
  async create({ program_id, number, allocation, from_year, to_year } = createBody){
    try{
      return await prisma.phases.create({
        data: {
          program_id,
          number: `${number}`,
          allocation: allocation.toFixed(2),
          from_year,
          to_year
        }
      })
    }catch(e){
      return checkPrismaError(e);
    }
  }

  async updatePhase(id, updateBody) {
    try{
      if(updateBody.hasOwnProperty("number")) updateBody = {...updateBody, number: `${updateBody.number}`}
      if(updateBody.hasOwnProperty("allocation")) updateBody = {...updateBody, allocation: updateBody.allocation.toFixed(2)}

      return await prisma.phases.update({
        where: {
          id
        },
        data: updateBody
      })
    }catch(e){
      return checkPrismaError(e);
    }
  }

  async getAllPhases(){
    return await prisma.phases.findMany();
  }

  async getPhaseById(id){
    return await prisma.phases.findFirst({
      where: {
        id
      }
    })
  }

  async getAllPhaseByProgramId(program_id){
    return await prisma.phases.findMany({
      where: {
        program_id
      }
    })
  }

  async deletePhaseById(id){
    try{
      return await prisma.phases.delete({
        where: {
          id
        }
      });
    }catch(e){
      return checkPrismaError(e);
    }
  }
}

module.exports = new Phases();