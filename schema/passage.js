import {GraphQLObjectType, GraphQLString} from 'graphql';
import mongoDb from '../db/mongo';

module.exports = new GraphQLObjectType({
  name: 'Passage',
  fields: {
    verse: {
      type: GraphQLString,
      resolve(obj, args, { queryMapper, mongoPool }) {
        const query = queryMapper.mapQuery(obj);
        return mongoDb(mongoPool).select(query);
      }
    }
  }
});