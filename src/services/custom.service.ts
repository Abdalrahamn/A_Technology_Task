import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomService {
  constructor(private http: HttpClient) {}

  Data = [
    {
      id: 1,
      CustomerName: 'احمد محمود',
      ticketNumber: 'C101',
      ticketPrice: '40$',
      cinma: 'سينما مصر , مول العرب , برج الاطنان , سرايا القبه',
      personNum: '1',
      visitNum: 'مره واحدة',
      ticket:'pdf.التذكره رقم 45',
    },
    {
      id: 2,
      CustomerName: 'محمد الغريب',
      ticketNumber: 'C102',
      ticketPrice: '30$',
      cinma: 'سينما مصر , مول العرب , برج الاطنان , سرايا القبه',
      personNum: '1',
      visitNum: 'مره واحدة',
      ticket:'pdf.التذكره رقم 45',
    },
    {
      id: 3,
      CustomerName: 'محمد الغريب',
      ticketNumber: 'C102',
      ticketPrice: '45$',
      cinma: 'سينما مصر , مول العرب , برج الاطنان , سرايا القبه',
      personNum: '1',
      visitNum: 'مره واحدة',
      ticket:'pdf.التذكره رقم 45',
    },
    {
      id: 4,
      CustomerName: 'محمد الغريب',
      ticketNumber: 'C103',
      ticketPrice: '54%',
      cinma: 'سينما مصر , مول العرب , برج الاطنان , سرايا القبه',
      personNum: '1',
      visitNum: 'مره واحدة',
      ticket:'pdf.التذكره رقم 45',
    }
    ,{
      id: 1,
      CustomerName: 'احمد محمود',
      ticketNumber: 'C101',
      ticketPrice: '40$',
      cinma: 'سينما مصر , مول العرب , برج الاطنان , سرايا القبه',
      personNum: '1',
      visitNum: 'مره واحدة',
      ticket:'pdf.التذكره رقم 45',
    },
    {
      id: 2,
      CustomerName: 'محمد الغريب',
      ticketNumber: 'C102',
      ticketPrice: '30$',
      cinma: 'سينما مصر , مول العرب , برج الاطنان , سرايا القبه',
      personNum: '1',
      visitNum: 'مره واحدة',
      ticket:'pdf.التذكره رقم 45',
    },
    {
      id: 3,
      CustomerName: 'محمد الغريب',
      ticketNumber: 'C102',
      ticketPrice: '45$',
      cinma: 'سينما مصر , مول العرب , برج الاطنان , سرايا القبه',
      personNum: '1',
      visitNum: 'مره واحدة',
      ticket:'pdf.التذكره رقم 45',
    },
    {
      id: 4,
      CustomerName: 'محمد الغريب',
      ticketNumber: 'C103',
      ticketPrice: '54%',
      cinma: 'سينما مصر , مول العرب , برج الاطنان , سرايا القبه',
      personNum: '1',
      visitNum: 'مره واحدة',
      ticket:'pdf.التذكره رقم 45',
    },{
      id: 1,
      CustomerName: 'احمد محمود',
      ticketNumber: 'C101',
      ticketPrice: '40$',
      cinma: 'سينما مصر , مول العرب , برج الاطنان , سرايا القبه',
      personNum: '1',
      visitNum: 'مره واحدة',
      ticket:'pdf.التذكره رقم 45',
    },
    {
      id: 2,
      CustomerName: 'محمد الغريب',
      ticketNumber: 'C102',
      ticketPrice: '30$',
      cinma: 'سينما مصر , مول العرب , برج الاطنان , سرايا القبه',
      personNum: '1',
      visitNum: 'مره واحدة',
      ticket:'pdf.التذكره رقم 45',
    },
    {
      id: 3,
      CustomerName: 'محمد الغريب',
      ticketNumber: 'C102',
      ticketPrice: '45$',
      cinma: 'سينما مصر , مول العرب , برج الاطنان , سرايا القبه',
      personNum: '1',
      visitNum: 'مره واحدة',
      ticket:'pdf.التذكره رقم 45',
    },
    {
      id: 4,
      CustomerName: 'محمد الغريب',
      ticketNumber: 'C103',
      ticketPrice: '54$',
      cinma: 'سينما مصر , مول العرب , برج الاطنان , سرايا القبه',
      personNum: '1',
      visitNum: 'مره واحدة',
      ticket:'pdf.التذكره رقم 45',
    }
  ];
}