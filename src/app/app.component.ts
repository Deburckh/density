import { DsHeaderTagConfiguration } from '@bmw-ds/components';
import { DsNavigationItem } from '@bmw-ds/components/ds-interfaces/navigation-bar.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  //Tag with environment for header
  environmentTagConfig: Partial<DsHeaderTagConfiguration> = { label: 'DEV' };

  //Navigation configuration
  navigationItems: DsNavigationItem[] = [
    {
      label: 'Density Documentation',
      href: 'https://density.bmwgroup.net',
      target: '_blank',
      icon: 'book',
    },
    {
      label: 'Developer Resources',
      icon: 'code_box',
      children: [
        {
          label: 'Component Library',
          href: 'https://density.bmwgroup.net/components',
          target: '_blank',
        },
        {
          label: 'Density Icons',
          href: 'https://density.bmwgroup.net/foundations/icons/density-icons',
          target: '_blank',
        },
      ],
    },
    {
      label: 'Design Resources',
      href: 'https://density.bmwgroup.net/resources-downloads',
      target: '_blank',
      icon: 'figma',
    },
  ];

  title = 'density';
}