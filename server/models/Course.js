const mongoose = require("mongoose");

// Define the Courses schema
const coursesSchema = new mongoose.Schema({
	courseName: { type: String },
	courseDescription: { type: String },
	instructor: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "user",
	},
	whatYouWillLearn: {
		type: String,
	},
	courseContent: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Section",
		},
	],
	ratingAndReviews: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "RatingAndReview",
		},
	],
	price: {
		type: Number,
	},
	thumbnail: {
		type: String,
	},
	tag: {
		type: [String],
		required: true,
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		// required: true,
		ref: "Category",
	},
	studentsEnrolled: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "user",
		},
	],
	instructions: {
		type: [String],
	},
	status: {
		type: String,
		enum: ['Draft', 'Published'],
		default: 'Draft',
	  },
	createdAt: {
		type:Date,
		default:Date.now
	},
},
{
    timestamps: true
  });

// Export the Courses model
module.exports = mongoose.model("Course", coursesSchema);

////////////////////////

// const mongoose = require('mongoose');

// const courseSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     description: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     whatYouWillLearn: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     instructor: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     tags: {
//       type: [String],
//       required: true,
//       trim: true,
//     },
//     thumbnail: {
//       type: String,
//       required: true,
//     },
//     category: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Category',
//       required: true,
//     },
//     averageRating: {
//       type: Number,
//       default: 0,
//     },
//     numberOfEnrolledStudents: {
//       type: Number,
//       default: 0,
//     },
//     sections: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Section',
//       },
//     ],
//     // timeDuration will be in seconds
//     totalDuration: {
//       type: Number,
//       required: true,
//       default: 0
//     },
//     reviews: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Review',
//       },
//     ],
//     studentsEnrolled: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//         default: [],
//       },
//     ],
//     instructions: [String],
//     status: {
//       type: String,
//       enum: ['Draft', 'Published'],
//       default: 'Draft',
//     },

//   },
//   {
//     timestamps: true
//   }
// );

// module.exports = mongoose.model('Course', courseSchema);
