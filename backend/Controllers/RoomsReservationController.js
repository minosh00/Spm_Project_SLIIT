const Rooms_Reservation = require('../models/RoomsReservationModel');

const RoomsReservationController = {

  //get Research_Topic
  getRooms_Reservation: async (req, res) => {
    try {
      const rooms = await Rooms_Reservation.find()
      res.json(rooms)
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  //get Research_Topic by ID
  getRooms_ReservationByID: async (req, res) => {
    try {
      Rooms_Reservation.findById(req.params.id, (error, data) => {
        if (error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(200).json({
            success: true,
            rooms: data
          })
        }
      })
    } catch (e) {
      console.log(e);
    }
  },

  //add Research_Topic
  createRooms_DescriptionReservation: async (req, res) => {
    try {
      const { RoomID, RoomType, RoomIMG, Description, Features } = req.body;

      const rooms = await Rooms_Reservation.findOne({ RoomID, RoomType, RoomIMG, Description, Features })
      if (rooms) return res.status(400).json({ msg: "This Room already exists." })

      const newRooms_Reservation = new Rooms_Reservation({ RoomID, RoomType, RoomIMG, Description, Features })

      await newRooms_Reservation.save()
      res.json({ msg: "Created a new Room" })

    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  //update Research Topic
  updateRooms_Reservation: async (req, res) => {
    try {
      const { RoomType, RoomIMG, Description, Features } = req.body;
      await Rooms_Reservation.findOneAndUpdate({ _id: req.params.id }, { RoomType, RoomIMG, Description, Features })

      res.json({ msg: "Updated Room Details" })

    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  //delete Research Topic
  deleteRooms_Reservation: async (req, res) => {
    try {
      await Rooms_Reservation.findByIdAndDelete(req.params.id)
      res.json({ msg: "Deleted a Room Details" })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  //   //get details by groupID
  //   getRooms_Reservation: async (req, res) => {
  //     try {
  //       let gid = req.params.gid;
  //       const rtopics = await Research_Topic.find({ gid: gid });
  //       res.status(200).json(rtopics);
  //     } catch (err) {
  //       res.json(err);
  //     }
  //   },

  //   //get details by Interest
  //   getDetailsbyInterest: async (req, res) => {
  //     try {
  //       let interest = req.params.interest;
  //       const rtopics = await Research_Topic.find({ interest: interest });
  //       res.status(200).json(rtopics);
  //     } catch (err) {
  //       res.json(err);
  //     }
  //   },

  //   //get details by Co-Supervisor status
  //   getDetailsbyStatus: async (req, res) => {
  //     try {
  //       let status_sup = req.params.status_sup;
  //       const rtopics = await Research_Topic.find({ status_sup: status_sup });
  //       res.status(200).json(rtopics);
  //     } catch (err) {
  //       res.json(err);
  //     }
  //   },

  //   //get only approved and requested topics
  //   getApproveStatus: async (req, res) => {
  //     try {
  //       const rtopics = await Research_Topic.find({ $and: [{ status_sup: 'Approved' }, { request: 'Requested' }] });
  //       res.status(200).json(rtopics);
  //     } catch (err) {
  //       res.json(err);
  //     }
  //   },

  //   //get only approved topics to Panel Member
  //   getCoSupervisorStatus: async (req, res) => {
  //     try {
  //       const rtopics = await Research_Topic.find({ $and: [{ status_sup: 'Approved' }, { status_co: 'Approved' }] });
  //       res.status(200).json(rtopics);
  //     } catch (err) {
  //       res.json(err);
  //     }
  //   },

  //   //get Supervisor Status Approved Topic
  //   getApproveSupStatus: async (req, res) => {
  //     try {
  //       const rtopics = await Research_Topic.find({ status_sup: 'Approved' });
  //       res.status(200).json(rtopics);
  //     } catch (err) {
  //       res.json(err);
  //     }
  //   },

  //   //get Not Requested Topics
  //   getEmailStatusNot: async (req, res) => {
  //     try {
  //       const rtopics = await Research_Topic.find({ request: 'Not Requested' });
  //       res.status(200).json(rtopics);
  //     } catch (err) {
  //       res.json(err);
  //     }
  //   },

  //   //get leader by IT Number
  //   getLeaderIT: async (req, res) => {
  //     try {
  //       let lead_no = req.params.lead_no;
  //       const rtopics = await Research_Topic.find({ lead_no: lead_no });
  //       res.status(200).json(rtopics);
  //     } catch (err) {
  //       res.json(err);
  //     }
  //   },
}

module.exports = RoomsReservationController;