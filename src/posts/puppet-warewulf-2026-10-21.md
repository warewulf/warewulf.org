---
slug: "/news/puppet-warewulf-2026-10-21"
date: "2026-10-21"
title: "Manage Warewulf with Puppet: puppet-warewulf now available"
---

The HPC team at the University of Luxembourg (ULHPC) has published
[puppet-warewulf][1], a Puppet module for installing, configuring, and running
a Warewulf server. The module is available on the [Puppet Forge][2] as
`ULHPC/warewulf` and is released under the Apache 2.0 license.

[1]: https://github.com/ULHPC/puppet-warewulf
[2]: https://forge.puppet.com/ULHPC/warewulf

With puppet-warewulf, a Warewulf server can be described entirely in Hiera:

- install a specific Warewulf release RPM and, optionally, the TFTP server
- manage `warewulf.conf`, node profiles, and nodes
- import and build node images from OCI registries with the `warewulf_image`
  type, optionally purging images that Puppet doesn't manage
- deploy overlays from a Git repository and rebuild them when they change
- run `wwctl configure --all` and keep `warewulfd` running

Getting started is a single `include`:

```puppet
node warewulf {
  include warewulf
}
```

with the cluster described in Hiera:

```yaml
warewulf::config::address: '192.168.1.1/24'
warewulf::config::nodeprofiles:
  default:
    image name: rocky10
warewulf::config::nodes:
  node-1:
    profiles:
      - default
    network devices:
      default:
        hwaddr: b8:2a:72:fd:5e:7c
        ipaddr: 172.23.1.103
warewulf::config::manage_images: true
warewulf::config::images:
  - rocky10
```

The module supports Puppet 8 on Enterprise Linux 8, 9, and 10 (Rocky Linux,
AlmaLinux, RHEL, and CentOS Stream). See the [reference documentation][3] for
every parameter.

[3]: https://github.com/ULHPC/puppet-warewulf/blob/master/REFERENCE.md

Thanks to Evann Dreumont and the ULHPC team for building this module and sharing
it with the community. Questions, bug reports, and contributions are welcome on
the [puppet-warewulf GitHub project][1]. If you manage Warewulf with another
configuration management tool, stop by the [Warewulf Slack][4] and tell us
about it!

[4]: /help
