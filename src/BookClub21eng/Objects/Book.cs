﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.BookClub21eng
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Book.
    /// </summary>
    // *** Start programmer edit section *** (Book CustomAttributes)

    // *** End programmer edit section *** (Book CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("BookE", new string[] {
            "Title as \'Title\'",
            "Author as \'Author\'",
            "Pages as \'Pages\'",
            "Cover as \'Cover\'",
            "Tags as \'Tags\'",
            "Description as \'Description\'",
            "Rating as \'Rating\'"})]
    [View("BookL", new string[] {
            "Title as \'Title\'",
            "Author as \'Author\'",
            "Pages as \'Pages\'",
            "Cover as \'Cover\'",
            "Tags as \'Tags\'",
            "Description as \'Description\'",
            "Rating as \'Rating\'"})]
    public class Book : ICSSoft.STORMNET.DataObject
    {
        
        private string fTitle;
        
        private string fAuthor;
        
        private int fPages;
        
        private string fCover;
        
        private string fTags;
        
        private string fDescription;
        
        private double fRating;
        
        // *** Start programmer edit section *** (Book CustomMembers)

        // *** End programmer edit section *** (Book CustomMembers)

        
        /// <summary>
        /// Author.
        /// </summary>
        // *** Start programmer edit section *** (Book.Author CustomAttributes)

        // *** End programmer edit section *** (Book.Author CustomAttributes)
        [StrLen(255)]
        public virtual string Author
        {
            get
            {
                // *** Start programmer edit section *** (Book.Author Get start)

                // *** End programmer edit section *** (Book.Author Get start)
                string result = this.fAuthor;
                // *** Start programmer edit section *** (Book.Author Get end)

                // *** End programmer edit section *** (Book.Author Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.Author Set start)

                // *** End programmer edit section *** (Book.Author Set start)
                this.fAuthor = value;
                // *** Start programmer edit section *** (Book.Author Set end)

                // *** End programmer edit section *** (Book.Author Set end)
            }
        }
        
        /// <summary>
        /// Cover.
        /// </summary>
        // *** Start programmer edit section *** (Book.Cover CustomAttributes)

        // *** End programmer edit section *** (Book.Cover CustomAttributes)
        [StrLen(255)]
        public virtual string Cover
        {
            get
            {
                // *** Start programmer edit section *** (Book.Cover Get start)

                // *** End programmer edit section *** (Book.Cover Get start)
                string result = this.fCover;
                // *** Start programmer edit section *** (Book.Cover Get end)

                // *** End programmer edit section *** (Book.Cover Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.Cover Set start)

                // *** End programmer edit section *** (Book.Cover Set start)
                this.fCover = value;
                // *** Start programmer edit section *** (Book.Cover Set end)

                // *** End programmer edit section *** (Book.Cover Set end)
            }
        }
        
        /// <summary>
        /// Description.
        /// </summary>
        // *** Start programmer edit section *** (Book.Description CustomAttributes)

        // *** End programmer edit section *** (Book.Description CustomAttributes)
        [StrLen(255)]
        public virtual string Description
        {
            get
            {
                // *** Start programmer edit section *** (Book.Description Get start)

                // *** End programmer edit section *** (Book.Description Get start)
                string result = this.fDescription;
                // *** Start programmer edit section *** (Book.Description Get end)

                // *** End programmer edit section *** (Book.Description Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.Description Set start)

                // *** End programmer edit section *** (Book.Description Set start)
                this.fDescription = value;
                // *** Start programmer edit section *** (Book.Description Set end)

                // *** End programmer edit section *** (Book.Description Set end)
            }
        }
        
        /// <summary>
        /// Pages.
        /// </summary>
        // *** Start programmer edit section *** (Book.Pages CustomAttributes)

        // *** End programmer edit section *** (Book.Pages CustomAttributes)
        public virtual int Pages
        {
            get
            {
                // *** Start programmer edit section *** (Book.Pages Get start)

                // *** End programmer edit section *** (Book.Pages Get start)
                int result = this.fPages;
                // *** Start programmer edit section *** (Book.Pages Get end)

                // *** End programmer edit section *** (Book.Pages Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.Pages Set start)

                // *** End programmer edit section *** (Book.Pages Set start)
                this.fPages = value;
                // *** Start programmer edit section *** (Book.Pages Set end)

                // *** End programmer edit section *** (Book.Pages Set end)
            }
        }
        
        /// <summary>
        /// Rating.
        /// </summary>
        // *** Start programmer edit section *** (Book.Rating CustomAttributes)

        // *** End programmer edit section *** (Book.Rating CustomAttributes)
        public virtual double Rating
        {
            get
            {
                // *** Start programmer edit section *** (Book.Rating Get start)

                // *** End programmer edit section *** (Book.Rating Get start)
                double result = this.fRating;
                // *** Start programmer edit section *** (Book.Rating Get end)

                // *** End programmer edit section *** (Book.Rating Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.Rating Set start)

                // *** End programmer edit section *** (Book.Rating Set start)
                this.fRating = value;
                // *** Start programmer edit section *** (Book.Rating Set end)

                // *** End programmer edit section *** (Book.Rating Set end)
            }
        }
        
        /// <summary>
        /// Tags.
        /// </summary>
        // *** Start programmer edit section *** (Book.Tags CustomAttributes)

        // *** End programmer edit section *** (Book.Tags CustomAttributes)
        [StrLen(255)]
        public virtual string Tags
        {
            get
            {
                // *** Start programmer edit section *** (Book.Tags Get start)

                // *** End programmer edit section *** (Book.Tags Get start)
                string result = this.fTags;
                // *** Start programmer edit section *** (Book.Tags Get end)

                // *** End programmer edit section *** (Book.Tags Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.Tags Set start)

                // *** End programmer edit section *** (Book.Tags Set start)
                this.fTags = value;
                // *** Start programmer edit section *** (Book.Tags Set end)

                // *** End programmer edit section *** (Book.Tags Set end)
            }
        }
        
        /// <summary>
        /// Title.
        /// </summary>
        // *** Start programmer edit section *** (Book.Title CustomAttributes)

        // *** End programmer edit section *** (Book.Title CustomAttributes)
        [StrLen(255)]
        public virtual string Title
        {
            get
            {
                // *** Start programmer edit section *** (Book.Title Get start)

                // *** End programmer edit section *** (Book.Title Get start)
                string result = this.fTitle;
                // *** Start programmer edit section *** (Book.Title Get end)

                // *** End programmer edit section *** (Book.Title Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.Title Set start)

                // *** End programmer edit section *** (Book.Title Set start)
                this.fTitle = value;
                // *** Start programmer edit section *** (Book.Title Set end)

                // *** End programmer edit section *** (Book.Title Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "BookE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View BookE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("BookE", typeof(IIS.BookClub21eng.Book));
                }
            }
            
            /// <summary>
            /// "BookL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View BookL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("BookL", typeof(IIS.BookClub21eng.Book));
                }
            }
        }
    }
}