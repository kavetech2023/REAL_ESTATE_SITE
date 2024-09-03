"use client";
import {useForm} from 'react-hook-form';
import {Form, FormControl, FormItem, FormField, FormLabel} from './ui/form';
import {Input} from './ui/input';
import {
    Select, 
    SelectContent,
SelectItem,
SelectTrigger,
SelectValue,}
from '@/components/ui/select';

import {format} from 'date-fns';
import {Calendar as CalendarIcon} from 'lucide-react';
import {cn} from "@/lib/utils"
import {Button} from './ui/button';
import { Calendar } from './ui/calendar';
import {Popover, PopoverContent, PopoverTrigger} from './ui/popover';


const SearchForm = () => {
    const form = useForm();
return(
    <div className='grid w-full items-end gap-4 rounded-lg bg-black sm:grid-cols-2 lg:grid-cols-4'>
        <Form {...form}>
            <FormField control={form.control} name='Address' render={({field}) =>{
                return(<FormItem>
                    <FormLabel className='text-white'>Property</FormLabel>
                    <Select>
                        <SelectTrigger>
                            <SelectContent>
                                <SelectItem value='buy'>Buy</SelectItem>
                                <SelectItem value='rent'>Rent</SelectItem>

                            </SelectContent>
                        </SelectTrigger>
                    </Select>
                </FormItem>
                )}}>
                </FormField>

                <FormField control={form.control} name='Address' render={({field}) =>{
                    return (
                    <FormItem>
                        <FormLabel className='text-white'>Address</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder='Search by Address' />
                        </FormControl>
                        </FormItem>
                   )
                   }}> 
                   </FormField>

                     <FormField control={form.control} name='Price' render={({field}) =>{
                          return (
                            <Popover>
                        
                          </Popover>
                          )
                     }}></FormField>
                       
            

                
           
            </Form>
    </div>
 
)
}

export default SearchForm