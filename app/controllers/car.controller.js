const CarModel = require('../models/CAR');
class CAR {
  // [POST] /
  async send(req, res) {
    try {
      const { uidval,slotval,uidDecout,uidDecin } = req.body;
      // const exist = await CarModel.findOne({uid:uidval, slot:slotval});
      // if(exist){
      //   await CarModel.updateMany({status:"leaving"},{slot:});
      //   // update => uid
      //   // await CarModel.updateOne({$where:{
      //   //   uid:uidval
      //   // }})
      // }else{
      //   await CarModel.create({uid:uidval}, {status:"staying"}, {start:}, {slot:})
      // }
      const car = await CarModel.create({ uid:uidDecout || uidDecin, slot:199 });
      res.status(201).json({ message: 'success', car: car });
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Send data fail', error: error.messages });
    }
  }
  async deleteAll(req, res) {
    try {
      await CarModel.deleteMany();
      res.status(201).json({ message: 'success' });
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Send data fail', error: error.messages });
    }
  }
  async getAll(req, res) {
    try {
      const resp = await CarModel.find(
        {
          uid: { $ne: null },
          slot: { $ne: null }
        },
        {},
        { sort: { createdAt: -1 } }
      ).lean();
      res.status(200).json({ resp });
    } catch (error) {
      res.status(400).json({ message: 'Get data fail', error: error.message });
    }
  }

  // // ------------------------------------
  // // [GET] /api/time {dev}
  // async receive(req, res) {
  //   //Find
  //   const data = await DhtModel.find(
  //     {
  //       createdAt: {
  //         $gt: new Date('2021-11-07 0:'),
  //         $lt: new Date('2021-12-07 0:'),
  //       },
  //     },
  //     { volt: 1, amp: 1, _id: 0, createdAt: 1 }
  //   ).lean();
  //
  //   return res.json(data);
  // }
  // // [DELETE] data {dev} /api/delete
  // async delete(req, res) {
  //   const { startDay, endDay } = req.body;
  //   await DhtModel.deleteMany({
  //     createdAt: {
  //       $gt: new Date(startDay),
  //       $lt: new Date(endDay),
  //     },
  //   });
  //   res.json('OK!');
  // }
  // // [DELETE] /api/delete/date {dev}
  // async deleteDate(req, res) {
  //   const { date } = req.body;
  //
  //   await DhtModel.findOneAndDelete({
  //     createdAt: {
  //       $eq: date,
  //     },
  //   });
  //
  //   res.json('OK!');
  // }
  // // ------------------------------------
  //
  // // [POST] /api/date
  // async getDate(req, res) {
  //   try {
  //     const { nextDate, currentDate } = req.body;
  //     const data = await DhtModel.find(
  //       {
  //         createdAt: {
  //           $gte: currentDate,
  //           $lt: nextDate,
  //         },
  //       },
  //       { _id: 0, createdAt: 1, volt: 1, amp: 1 }
  //     ).lean();
  //     res.json(data); //if no data then return []
  //   } catch (error) {
  //     res.status(400).json({ message: 'Get data fail', error: error.messages });
  //   }
  // }
  //
  // // [POST] /api/hour
  // async getHour(req, res) {
  //   try {
  //     const { currentHour, nextHour } = req.body;
  //
  //     const data = await DhtModel.find(
  //       {
  //         createdAt: {
  //           $gte: currentHour,
  //           $lt: nextHour,
  //         },
  //       },
  //       { _id: 0, createdAt: 1, volt: 1, amp: 1 }
  //     ).lean();
  //     res.json(data);
  //   } catch (error) {
  //     res.status(400).json({ message: 'Get data fail', error: error.messages });
  //   }
  // }
  //
  // // [POST] /api/month
  // async getMonth(req, res) {
  //   try {
  //     const { currentMonth, nextMonth } = req.body;
  //     const data = await DhtModel.find(
  //       {
  //         createdAt: {
  //           $gte: new Date(currentMonth).getTime(),
  //           $lt: new Date(nextMonth).getTime(),
  //         },
  //       },
  //       { _id: 0, createdAt: 1, volt: 1, amp: 1 }
  //     ).lean();
  //     res.json(data);
  //   } catch (error) {
  //     res.status(400).json({ message: 'Get data fail', error: error.messages });
  //   }
  // }
  //
  // // [POST] /api/current-time
  // async currentTime(req, res) {
  //   try {
  //     const data = await DhtModel.findOne(
  //       {},
  //       { _id: 0, createdAt: 1, volt: 1, amp: 1 },
  //       { sort: { createdAt: -1 } }
  //     ).lean();
  //     res.json(data);
  //   } catch (error) {
  //     res.status(400).json({ message: 'Get data fail', error: error.messages });
  //   }
  // }
}
module.exports = new CAR();
