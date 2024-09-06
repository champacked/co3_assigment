// src/resolvers.ts
import { supabase } from './supabaseClient';

export const resolvers = {
  Query: {
    getUser: async (_: any, args: { username: string }) => {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('username', args.username)
        .single();

      if (error) throw new Error(error.message);
      return data;
    },
  },
  Mutation: {
    createUser: async (_: any, args: { username: string }) => {
      const { data, error } = await supabase
        .from('users')
        .insert({ username: args.username })
        .single();

      if (error) throw new Error(error.message);
      return data;
    },
    updateCoinBalance: async (
      _: any,
      args: { username: string; amount: number }
    ) => {
      const { data, error } = await supabase
        .from('users')
        .update({ coin_balance: args.amount })
        .eq('username', args.username)
        .single();

      if (error) throw new Error(error.message);
      return data;
    },
  },
};
