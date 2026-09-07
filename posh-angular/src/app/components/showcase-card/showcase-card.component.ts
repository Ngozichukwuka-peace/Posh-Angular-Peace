import { Component, input, output } from '@angular/core';

import { ShowcaseItem } from '../../models/showcase-item.model';

@Component({
  selector: 'app-showcase-card',
  standalone: true,
  templateUrl: './showcase-card.component.html',
  styleUrl: './showcase-card.component.css',
})


export class ShowcaseCardComponent {
  data = [
    {
      value: 'Landing NOKIA',
      value2: '(Nokia 5)',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-landing-nokia.jpg',
    },
    {
      value: 'Hospital',
      value2: '((Northwestern Medicine, Columbus Regional Health))',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-hospital.jpg',
    },
    {
      value: 'Personal',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-personal.jpg',
    },
    {
      value: 'Shop(Aliexpress, Sammy Dress)',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-shop.jpg',
    },
    {
      value: 'About Team',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-about-team.jpg',
    },
    {
      value: 'Contact 3',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-contact-3.jpg',
    },
    {
      value: 'Services 1',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-services-1.jpg',
    },
    {
      value: 'Services 3',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-services-3.jpg',
    },
    {
      value: 'Settings',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-settings.jpg',
    },
    {
      value: 'Maintainance',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-maintenance.jpg',
    },
    {
      value: 'Product Details',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/shop-product-details.jpg',
    },
    {
      value: 'List Title Outside',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/portfolio-2.jpg',
    },
    {
      value: 'Blog List',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/blog-list.jpg',
    },

    {
      value: 'Digital Agency',
      value2: '(Technext, Green Chameleon)',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-digital-agency.jpg',
    },
    {
      value: 'Education',
      value2: '((American University, Stanford))',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-education.jpg',
    },
    {
      value: 'Hotel',
      value2: '(The Peninsula, Trump Hotels)',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-digital-agency.jpg',
    },
    {
      value: 'Resturant',
      value2: '((The Smoke Haus, Yung Kee))',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-digital-agency.jpg',
    },
    {
      value: 'Careers',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-careers.jpg',
    },
    {
      value: 'Pricing 1',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-pricing-1.jpg',
    },
    {
      value: 'Services 2',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-services-2.jpg',
    },
    {
      value: 'Log in (With Social)',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-log-in-social.jpg',
    },
    {
      value: 'Account Recovery',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-recovery.jpg',
    },
    {
      value: 'Products List',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/shop-products-list.jpg',
    },
    {
      value: 'Cart',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/shop-cart.jpg',
    },
    {
      value: 'Portfolio Details',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/portfolio-details.jpg',
    },
    {
      value: 'Case Study',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/portfolio-case-study.jpg',
    },
    {
      value: 'Travel Agency',
      value2: '((ireland.com))',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-travel-agency.jpg',
    },
    {
      value: 'Conference',
      value2: '((Chain React))',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-conference.jpg',
    },
    {
      value: 'Landing Software',
      value2: '((Skype, Dropbox))',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-landing-software-b5.png',
    },
    {
      value: 'About Company',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-about-company.jpg',
    },
    {
      value: 'Contact 1',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-contact-1.jpg',
    },
    {
      value: 'Contact 2',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-contact-2.jpg',
    },
    {
      value: 'Pricing 2',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-pricing-2.jpg',
    },
    {
      value: 'Log in (Simple)',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-log-in.jpg',
    },
    {
      value: 'Profile',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/page-profile.jpg',
    },
    {
      value: 'Products Grid',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/shop-products-grid.jpg',
    },
    {
      value: 'List Title inside',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/portfolio-1.jpg',
    },
    {
      value: 'List Title Hover',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/portfolio-3.jpg',
    },
    {
      value: 'Article',
      authorImg:
        'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/blog-article.jpg',
    },

  ];

  imgArrs = [
    '	https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-landing-nokia.jpg',
    '	https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-digital-agency.jpg',
    '	https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-travel-agency.jpg',
    '	https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-digital-agency.jpg',
    '	https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-digital-agency.jpg',
    'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-digital-agency.jpg',
    'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots/home-digital-agency.jpg',
  ];
}






